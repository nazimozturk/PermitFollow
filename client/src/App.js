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
import React, { useState } from "react";
import Register from "./Pages/Register/Register";



const Layout = ()=>{
  const [isLogin,setIsLogin]=useState(true)

  // const [user, setuser]=useState({name:"",email:""})
  // const [eror, setError]=useState('')

  // const Login = details =>{
  //   console.log(details)
  // }

  // const Logout = ()=>{
  //   console.log("Logout")
  // }

  return(
  <div className="app">
    {isLogin
    ?
    <Login/>     
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
        path:"/Admin",
        element:<Admin/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
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
