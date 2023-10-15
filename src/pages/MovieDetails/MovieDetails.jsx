import { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { BackButton } from "../../components/BackButton/BackButton";
import style from "./MovieDetails.module.css";

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
        className={style.poster}
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt=""
      ></img>
      <h2>
        {movie.title} ({movie.release_date.substring(0, 4)})
      </h2>
      <p>User Score: {movie.vote_average * 10}%</p>
      <div className={style.overview}>
        <h2>Overview</h2>
        {movie.overview}
      </div>

      <h2>Genres</h2>
      {movie.genres.map((genre) => (
        <div className={style.bubble}>{genre.name}</div>
      ))}

      <h2>Additional information</h2>
      <ul className={style.info_list}>
        <li>
          <Link className={style.info_list_item} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={style.info_list_item} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetails;
