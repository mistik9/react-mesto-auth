import React, { Children } from "react";
import App from "./App";
import logo from '../images/logo.svg';


function Header({children}) {
    return (
        <header className="header">
        <img src={logo} alt="лого" className="header__logo"/>
        {children}
      </header>
    )
}

export default Header;