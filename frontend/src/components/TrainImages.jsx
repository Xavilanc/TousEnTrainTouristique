import "../assets/styles/TrainImages.css";

function TrainImages({ images }) {
  return (
    <div>
      {images &&
        images.map((image) => (
          <div key={image.id}>
            <img className="train_image" src={image.path} alt={image.title} />
            <div>{image.title}</div>
          </div>
        ))}
    </div>
  );
}

export default TrainImages;
