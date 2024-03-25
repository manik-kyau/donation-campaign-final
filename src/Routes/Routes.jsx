import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import DonetionDetailsPage from "../Pages/DonetionDetailsPage/DonetionDetailsPage";
import Donetion from "../Pages/Donation/Donetion";
import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'donation',
            element:<Donetion></Donetion>
        },
        {
            path:'/donetion-details/:id',
            element:<DonetionDetailsPage></DonetionDetailsPage>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        }
      ]
    },
  ]); 

  export default router;
