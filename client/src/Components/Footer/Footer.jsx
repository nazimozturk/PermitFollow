import React from 'react';
import './Footer.scss';

const d = new Date();
let text = d.getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">copyright 2022 - {text}</div>
      </div>
    </>
  );
};

export default Footer;
