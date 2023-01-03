import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbarMy">
        <div className="menu">
          <div className="imgLogo">
            <Link to="/" className="link">
              <img
                src="https://static.wixstatic.com/media/2f2da9_35392dad114442de8b66c2962d666ca8~mv2.png"
                alt=""
                className="logo"
              />
            </Link>
          </div>
          <Link to="/" className="link">
            <div className="menuItem">Home</div>
          </Link>
          <Link to="/PermitList" className="link">
            <div className="menuItem">Permit List</div>
          </Link>
          <Link to="/PersonelList" className="link">
            <div className="menuItem">Personel List</div>
          </Link>
          <Link to="/Admin" className="linkAdmin">
            <div className="menuItemAdmin">Admin</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
