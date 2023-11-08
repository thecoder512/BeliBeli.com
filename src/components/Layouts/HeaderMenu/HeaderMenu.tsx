import { Button, LinkButton } from "@/components/UI";
import {
  BabayHeaderNavigationLink,
  BeliBeliHomeHeaderNavigationLink,
  DividedHeaderNavigationLink,
  KidsHeaderNavigationLink,
  MenHeaderNavigationLink,
  SaleHeaderNavigationLink,
  SportsHeaderNavigationLink,
  SustainabilityHeaderNavigationLink,
  WomenHeaderNavigationLink,
} from "@/constants";
import { MutableRefObject, useRef, useState } from "react";

const navigationLinksData = [
  WomenHeaderNavigationLink,
  MenHeaderNavigationLink,
  DividedHeaderNavigationLink,
  BabayHeaderNavigationLink,
  KidsHeaderNavigationLink,
  BeliBeliHomeHeaderNavigationLink,
  SportsHeaderNavigationLink,
  SaleHeaderNavigationLink,
  SustainabilityHeaderNavigationLink,
];

const HeaderMenu = () => {
  const [route, setRoute] = useState<string>("");
  const [currentactive, setCurrentactive] = useState<boolean>(false);

  const routeRef = useRef() as MutableRefObject<HTMLDivElement>;
  const menuRef = useRef() as MutableRefObject<HTMLUListElement>;

  const hideMenuTreeHandler = () => {
    setRoute("");
    const uls = menuRef.current.querySelectorAll(
      ".header-menu__category-list",
    ) as NodeListOf<HTMLUListElement>;
    routeRef.current.classList.remove("show-route");
    uls.forEach((ul) => ul.classList.remove("show"));
  };
  const onclickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.nextElementSibling?.classList.toggle("show");
    routeRef.current.classList.add("show-route");
    setRoute(e.currentTarget.innerText);
  };

  const activeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.parentElement
      ?.querySelectorAll("button")
      .forEach((btn) => btn.classList.remove("show"));
    el.classList.add("show");

    // making statement if the current active is signin/register acitve it page
    setCurrentactive(!currentactive);
  };

  return (
    <div className={`header-menu`}>
      <div className="header-menu__top">
        <Button className="show" onClick={activeHandler}>
          Shop
        </Button>
        <Button onClick={activeHandler}>Signin/Register</Button>
      </div>

      <div
        ref={routeRef}
        className="header-menu__route"
        onClick={hideMenuTreeHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>

        <span>{route}</span>
      </div>

      <div
        className={`header-menu__active-buffer ${
          currentactive && "show--login"
        }`}
      >
        <LinkButton href="/login">sign In</LinkButton>
        <LinkButton href="/signup">sign Up</LinkButton>
      </div>

      <ul ref={menuRef}>
        {navigationLinksData.map((data, index) => {
          return (
            <ul className={`header-menu__menu menu${index}`} key={index}>
              {data.map((item, index1) => {
                return typeof item === "string" ? (
                  <li
                    key={index1}
                    className="header-menu__menu-category"
                    onClick={onclickHandler}
                  >
                    {item}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="26"
                      height="26"
                    >
                      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                    </svg>
                  </li>
                ) : (
                  <ul key={index1} className="header-menu__category-list">
                    {item.map((item2, index2) => {
                      return (
                        <ul key={index2}>
                          {typeof item2 === "string" ? (
                            <li>{item2}</li>
                          ) : (
                            <ul>
                              {item2?.map((item3, index3) => {
                                return (
                                  typeof item3 === "string" && (
                                    <li
                                      className="header-menu__list"
                                      key={index3}
                                    >
                                      <LinkButton href={item3}>
                                        {item3}
                                      </LinkButton>
                                    </li>
                                  )
                                );
                              })}
                            </ul>
                          )}
                        </ul>
                      );
                    })}
                  </ul>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
