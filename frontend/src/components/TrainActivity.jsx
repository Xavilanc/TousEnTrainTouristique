import "../assets/styles/TrainActivity.css";

function TrainActivity({ activities }) {
  return (
    <div>
      {activities &&
        activities.map((activity) => (
          <div key={activity.id}>
            <div className="activity_title">{activity.title}</div>
            <div className="activity_paragraphe">{activity.description}</div>
          </div>
        ))}
    </div>
  );
}

export default TrainActivity;
