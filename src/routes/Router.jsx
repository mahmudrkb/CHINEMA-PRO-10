import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../page/Error";
import Home from "../page/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Login";

import Signup from "../page/Signup";
import Contact from "../page/Contact";
import AddMovies from "../page/AddMovies";
import AllMovies from "../page/AllMovies";
import MovieDetails from "../page/MovieDetails";
import Favorite from "../page/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:5000/allmovies"),
      },
      {
        path: "/allMovies/movieDetails/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allmovies/${params.id}`),
      },
      {
        path: "/addMovies",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/favorite",
        element:<Favorite></Favorite>,
        loader: () => fetch("http://localhost:5000/allmovies"),
       
       
      },
      {
        path: "/pages",
        element: <Contact></Contact>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
