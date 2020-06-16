/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
import React from 'react';
import "../assets/styles/components/header.scss";
import Logo from "../assets/images/logoPlatzi.png";
import user from "../assets/images/user-icon.png";

const Header = () => (
<header className="header">
    <img className="header__img" src={Logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={user} alt="Logo_user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
</header>
);

export default Header;
