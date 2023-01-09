import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Permit from "./Pages/Permit/Permit";
import PermitList from "./Pages/PermitList/PermitList";
import PersonelList from "./Pages/PersonelList/PersonelList";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";



const Layout = ()=>{
  const [isLogin,setIsLogin]=useState(null)
  


  return(
  <div className="app">
    {isLogin
    ?
    <Login setIsLogin={setIsLogin}/>     
    :
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>}
    
  </div>)
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Permit",
        element:<Permit/>
      },
      {
        path:"/PermitList",
        element:<PermitList/>
      },
      {
        path:"/PersonelList",
        element:<PersonelList/>
      },
      {
        path:"/PersonelList/:id",
        element:<PersonelList/>
      },
      {
        path:"/Admin",
        element:<Admin/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
    ]
  },
]);

const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}


export default App;
