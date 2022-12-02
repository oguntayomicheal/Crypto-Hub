import React from 'react';
import { Link } from 'react-router-dom';
import style from './css/HomePage.module.css';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.Nav}>CryptoHub</Link>
      <div className={style.navIcon}>
        <i className="fa fa-gear" />
        <i className="fa fa-microphone" />
      </div>
    </nav>
  );
}

export default Navbar;
