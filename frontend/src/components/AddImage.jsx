import React, { useState } from "react";

function AddImage() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

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
        <button type="button" className="btn btn-primary" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <div>
        <p>Uploaded image will be displayed here</p>
        <img src={url} alt="updloaded" />
      </div>
    </div>
  );
}

export default AddImage;
