import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDate } from "./DateManager";

function AddImage() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [trainId, setTrainId] = useState("");
  const [sendData] = useState({
    title: "",
    path: "",
    user_id: 0,
    train_id: 0,
    created_on: "",
    updated_on: "",
    published: 0,
  });
  // Fonction sendToDatabase sert à envoyer les données dans la table image_train
  const sendToDatabase = () => {
    if (sendData.path !== "") {
      axios
        .post(`http://127.0.0.1:5000/api/trains/images`, { ...sendData })
        .then((data) => console.warn(`${data}added`))
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
      // reinitialise toute les données du state sauf url sinon ça déclenche une update
      sendData.title = "";
      sendData.path = "";
      sendData.user_id = 0;
      sendData.train_id = 0;
      sendData.created_on = "";
      sendData.updated_on = "";
      sendData.published = 0;
      setImage("");
      setTitle("");
      setTrainId(0);
    }
  };

  // Le useEffect est placé ici car il appelle la fonction sendToDatabase qui doit donc être avant.
  // Il permet de s'enclencher une fois l'url mise a jours
  useEffect(() => {
    sendData.title = title;
    sendData.path = url;
    sendData.train_id = trainId;
    sendData.created_on = getDate();
    sendData.updated_on = getDate();
    sendToDatabase();
  }, [url]);

  // Fonction utilisant cloudinary pour poster nos images sur leur service cloud
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "photos");
    data.append("cloud_name", "dqi8p5mh9");
    fetch("  https://api.cloudinary.com/v1_1/dqi8p5mh9/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((dataUrl) => {
        setUrl(dataUrl.url);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <p>AddImage</p>

      <div className="addImage">
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <p>Title</p>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p>Train ID</p>
        <input
          type="number"
          onChange={(e) => setTrainId(e.target.value)}
          value={trainId}
        />
        <button type="button" className="btn btn-primary" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <div>
        <p>Uploaded image will be displayed here</p>
        {url && <img src={url} alt="uploaded" width="100px" />}
      </div>
    </div>
  );
}

export default AddImage;
