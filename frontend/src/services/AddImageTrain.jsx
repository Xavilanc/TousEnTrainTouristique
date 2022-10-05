import React, { useState, useEffect } from "react";
import axios from "axios";

function AddImageTrain() {
  const userId = window.localStorage.getItem("id");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [oldUrl, setOldUrl] = useState("");

  const [sendData] = useState({
    path: "",
    user_id: 0,
  });
  // Fonction sendToDatabase sert à envoyer les données dans la table image_train
  const sendToDatabase = () => {
    if (sendData.path !== "" && url !== oldUrl) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/trains/images`, {
          ...sendData,
        })
        .then((data) => console.warn(`${data}added`))
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
      // reinitialise toute les données du state sauf url sinon ça déclenche une update
      sendData.path = "";
      sendData.user_id = 0;
      setOldUrl(url);
      setImage("");
    }
  };

  // Le useEffect est placé ici car il appelle la fonction sendToDatabase qui doit donc être avant.
  // Il permet de s'enclencher une fois l'url mise a jours
  useEffect(() => {
    sendData.path = url;
    sendData.train_id = userId;
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
    <div className="add_image_main_div">
      <div className="addImage">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          // eslint-disable-next-line no-return-assign
          onClick={(e) => (e.target.value = null)}
          key={url}
        />
        <button type="button" className="btn btn-primary" onClick={uploadImage}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default AddImageTrain;
