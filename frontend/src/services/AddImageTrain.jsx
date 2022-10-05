function AddImageTrain({ sendData, setSendData }) {
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
          className="add_image_button"
          type="file"
          onChange={(e) => uploadImage(e)}
          key={sendData.path}
        />
        <div>
          <p>Aperçu de l'image chargée</p>
          {sendData.path && (
            <img src={sendData.path} alt="uploaded" width="100px" />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddImageTrain;
