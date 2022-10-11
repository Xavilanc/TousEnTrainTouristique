import "../assets/styles/TrainImages.css";

function TrainImages({ images }) {
  return (
    <div className="train_image_image_div">
      {images &&
        images.map((image) => (
          <div className="train_image_title_box" key={image.id}>
            <img className="train_image" src={image.path} alt={image.title} />
            <div className="train_image_title">{image.title}</div>
          </div>
        ))}
    </div>
  );
}

export default TrainImages;
