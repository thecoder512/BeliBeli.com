import { LinkButton } from "@/components/UI";
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
import React from "react";

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
  return (
    <>
      <ul className="header-menu">
        {navigationLinksData.map((item, index) => {
          return (
            <ul key={index}>
              <LinkButton href="" className="header-menu__link">
                {item[0][0][0]}
              </LinkButton>
            </ul>
          );
        })}
      </ul>
    </>
  );
};

export default HeaderMenu;
