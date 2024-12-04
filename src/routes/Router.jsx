import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../page/Error";
import Home from "../page/Home";

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
  ]);
  export default router