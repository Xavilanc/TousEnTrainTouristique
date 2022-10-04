import axios from "axios";
import React, { useEffect, useState } from "react";
// import { transDate } from "../services/DateManager";

function ImageList() {
  const [avatarList, setAvatarList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/imageavatars`)
      .then((response) => response.data)
      .then((data) => setAvatarList(data));
  }, [refresh]);

  const handleRefresh = () => {
    setTimeout(() => {
      setRefresh(!refresh);
    }, 200);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/imageavatars/${id}`)
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
            {/* <th className="review_list_th">path</th> */}
            <th className="review_list_th review_list_train">userId</th>
            <th className="review_list_th review_list_train">Preview</th>
            <th className="review_list_th review_list_train">Delete</th>
          </tr>
        </thead>
        <tbody>
          {avatarList &&
            avatarList.map((avatar) => (
              <tr id="review_list_map_tr" key={avatar.id}>
                <td className="review_list_td">{avatar.id}</td>
                {/* <td className="review_list_td">{avatar.path}</td> */}
                <td className="review_list_td">{avatar.name}</td>
                <td className="review_list_td">
                  <img src={avatar.path} alt="avatar" width="50%" />
                </td>
                <td className="review_list_td">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={(e) => handleClick(e, avatar.user_id)}
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

export default ImageList;
