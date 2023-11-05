import React from "react";
import Link from "../../UI/Link";

import { logo, notfication, shoppinsCard } from "../../../assets";
import Search from "../../UI/Search";

const Header = () => {
  const showMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("header__menu--show");
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Search />

        <div>
          <Link href="/" className="header__logo">
            <img width={125} height={30} src={logo} alt="logo img" />
          </Link>

          <div className="header__functionality">
            <video src={shoppinsCard} />
            <video src={notfication} />
          </div>

          <div className="header__menu" onClick={showMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
