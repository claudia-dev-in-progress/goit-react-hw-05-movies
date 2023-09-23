import { useEffect, useState } from "react";
import { getTrending } from "../../api/api";
import { Link } from "react-router-dom";

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
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => (
          <li>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
