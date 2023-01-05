import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          Copyright © 2022 - {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Footer;
