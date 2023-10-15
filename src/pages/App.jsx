import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Movies = lazy(() => import("./Movies/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

const StyledLink = styled(NavLink)`
  color: #ffb6c1;
  background-color: #8b008b;
  border: none;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 150px;
  margin-bottom: 50px;
  border-radius: 100px;
  margin-right: -100px;
  margin-top: 20px;
  font-size: 16px;
  &.active {
    color: #ff1493;
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
