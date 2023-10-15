import { useEffect, useState } from "react";
import { getTrending } from "../../api/api";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchTrending() {
      const response = await getTrending();
      setMovies(response);
    }

    fetchTrending();
  }, []);

  return (
    <>
      <h1 className={style.title}>Trending today</h1>
      <ul className={style.movies_list}>
        {movies.map((movie) => (
          <li>
            <Link className={style.movies_item} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
