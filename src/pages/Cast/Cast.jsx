import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../api/api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastLocal() {
      const cast = await getCast(movieId);
      setCast(cast);
    }

    getCastLocal();
  }, [movieId]);
  return (
    <ul>
      {cast.map((c) => (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200${c.profile_path}`}
            alt={c.name}
          />
          <p>{c.name}</p>
          <p>Character: {c.character}</p>
        </>
      ))}
    </ul>
  );
};

export default Cast;
