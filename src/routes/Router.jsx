import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../page/Error";
import Home from "../page/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Login";

import Signup from "../page/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>

        }
      ]
    },


    { path:"/auth",
      element:<AuthLayout></AuthLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        },
        {
          path:"/auth/signup",
          element:<Signup></Signup>
        }
      ]

    }
  ]);
  export default router