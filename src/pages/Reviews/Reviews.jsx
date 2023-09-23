import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviewsLocal() {
      const reviews = await getReviews(movieId);
      setReviews(reviews);
    }

    getReviewsLocal();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any review for this movie</p>
      )}
    </>
  );
};

export default Reviews;
