import React from "react";
import Link from "../../UI/Link";

import { logo, notfication, shoppinsCard } from "../../../assets";
import Search from "../../UI/Search";
import { useDispatch, useSelector } from "react-redux";
import { showMobileMenu } from "@/context/Utils";
import { RootState } from "@/context/store";

const Header = () => {
  const selector = useSelector((state: RootState) => state.util)
  const dispatch = useDispatch()

  const showMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("header__menu--show");

    dispatch(showMobileMenu(!selector.mobileMenuActive))
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
