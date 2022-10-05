function AddImageTrain({ sendData, setSendData }) {
  // Fonction sendToDatabase sert à envoyer les données dans la table image_train
  // const sendToDatabase = () => {
  //   if (sendData.path !== "" && url !== oldUrl) {
  //     axios
  //       .post(`${import.meta.env.VITE_BACKEND_URL}/api/trains/images`, {
  //         ...sendData,
  //       })
  //       .then((data) => console.warn(`${data}added`))
  //       .catch((error) =>
  //         console.warn(`Authorization failed : ${error.message}`)
  //       );
  // reinitialise toute les données du state sauf url sinon ça déclenche une update
  // sendData.path = "";
  // sendData.user_id = 0;
  // setOldUrl(url);
  // setImage("");
  //   }
  // };

  // Le useEffect est placé ici car il appelle la fonction sendToDatabase qui doit donc être avant.
  // Il permet de s'enclencher une fois l'url mise a jours

  // Fonction utilisant cloudinary pour poster nos images sur leur service cloud
  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "photos");
    data.append("cloud_name", "dqi8p5mh9");
    fetch("  https://api.cloudinary.com/v1_1/dqi8p5mh9/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((dataUrl) => {
        setSendData({ ...sendData, path: dataUrl.url });
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div className="add_image_main_div">
      <div className="addImage">
        <input
          type="file"
          onChange={(e) => uploadImage(e)}
          key={sendData.path}
        />
      </div>
      <div>
        <p>Uploaded image will be displayed here</p>
        {sendData.path && (
          <img src={sendData.path} alt="uploaded" width="100px" />
        )}
      </div>
    </div>
  );
}

export default AddImageTrain;
