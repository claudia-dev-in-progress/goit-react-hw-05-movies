import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "../../api/api";
import style from "./Movies.module.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleFormChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.query.value });

    setQuery("");
    form.reset();
  };

  useEffect(() => {
    async function searchMoviesLocal() {
      const movies = await searchMovies(searchQuery);
      setMovies(movies);
    }
    if (!searchQuery) return;
    searchMoviesLocal();
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={query}
          name="query"
          onChange={handleFormChange}
          className={style.search_input}
        ></input>
        <button className={style.search_button} type="submit">
          Search
        </button>
      </form>
      <ul className={style.movies_list}>
        {movies.map((movie) => (
          <li>
            <Link className={style.movie_item} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
