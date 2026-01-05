
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        index : true ,
        loader: ()=> fetch('../../public/booksData.json'),
        path : "/",
        Component : Home ,
      }
    ]
  },
 
]);
