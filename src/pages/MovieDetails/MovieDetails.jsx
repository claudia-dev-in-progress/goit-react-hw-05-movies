import { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { BackButton } from "../../components/BackButton/BackButton";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetailsLocal() {
      const m = await getMovieDetails(movieId);
      setMovie(m);
    }

    getMovieDetailsLocal();
  }, [movieId]);

  if (movie == null) {
    return null;
  }

  return (
    <>
      <BackButton></BackButton>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt=""
      ></img>
      <h1>
        {movie.title} ({movie.release_date.substring(0, 4)})
      </h1>
      <p>User Score: {movie.vote_average * 10}%</p>
      <h1>Overview</h1>
      {movie.overview}
      <h1>Genres</h1>
      {movie.genres.map((genre) => genre.name).join("  ")}

      <h1>Additional information</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetails;
