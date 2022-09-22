function ReviewTrainList({ reviews }) {
  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <div key={review.review_id}>
            <div>{review.user_name}</div>
            <div>{review.comment}</div>
          </div>
        ))}
    </div>
  );
}

export default ReviewTrainList;
