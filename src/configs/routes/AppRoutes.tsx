import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemsList from "../../pages/ItemsList";
import Welcome from "../../pages/Welcome";
import AddItem from "../../pages/AddItem";


const router = createBrowserRouter([
    {
      path: "/Welcome",
      element:<Welcome /> 
        
      ,
    },
    {
      path: "/ItemList",
      element: <ItemsList />,
    },
    {
      path: "/AddItem",
      element: <AddItem />
    }
  ]);


  function AppRoutes(){
    return <RouterProvider router = {router}/>

  }

  export default AppRoutes;
