/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/styles/ImageList.css";

function ImageListTrain() {
  const [trainImages, setTrainImages] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/trains/images`)
      .then((response) => response.data)
      .then((data) => setTrainImages(data));
  }, [refresh]);

  const handleRefresh = () => {
    setTimeout(() => {
      setRefresh(!refresh);
    }, 200);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/trains/images/${id}`)
      .then(() => handleRefresh())
      .catch((err) => console.warn(err));
  };
  const handleUpdate = (e, avatar) => {
    e.preventDefault();
    let { published } = avatar;
    console.warn(published);
    published === 0 ? (published = 1) : (published = 0);
    console.warn(published);
    console.warn(`update image id : ${avatar.id}`);
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/trains/images/${avatar.id}`,
        { published }
      )
      .then((response) => console.warn(response))
      .then(() => handleRefresh())
      .catch((err) => console.warn(err));
  };

  return (
    <div className="imageList">
      {" "}
      <table className="review_list_table">
        <thead className="review_list_thead">
          <tr>
            <th className="review_list_th review_list_id">id</th>
            <th className="review_list_th review_list_train">userId</th>
            <th className="review_list_th review_list_train">train_id</th>
            <th className="review_list_th review_list_train">Preview</th>
            <th className="review_list_th review_list_train">Published</th>
            <th className="review_list_th review_list_train">Delete</th>
          </tr>
        </thead>
        <tbody>
          {trainImages &&
            trainImages.map((avatar) => (
              <tr id="review_list_map_tr" key={avatar.id}>
                <td className="review_list_td">{avatar.id}</td>
                <td className="review_list_td">{avatar.user_id}</td>
                <td className="review_list_td">{avatar.train_id}</td>
                <td className="review_list_td">
                  <img src={avatar.path} alt="avatar" width="50%" />
                </td>
                <td className="review_list_td">
                  {avatar.published ? (
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={(e) => handleUpdate(e, avatar)}
                    >
                      Published
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleUpdate(e, avatar)}
                    >
                      Unpublished
                    </button>
                  )}
                </td>
                <td className="review_list_td">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={(e) => handleClick(e, avatar.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImageListTrain;
