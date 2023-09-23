import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Movies = lazy(() => import("./Movies/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies </StyledLink>
      </nav>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetails></MovieDetails>}
          >
            <Route path="cast" element={<Cast></Cast>}></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
          </Route>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
