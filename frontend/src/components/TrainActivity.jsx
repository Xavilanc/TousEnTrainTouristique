import "../assets/styles/TrainActivity.css";

function TrainActivity({ activity }) {
  return (
    <div>
      <div className="activity_title">{activity.activity_title}</div>
      <div className="activity_paragraphe">{activity.activity_description}</div>
    </div>
  );
}

export default TrainActivity;
