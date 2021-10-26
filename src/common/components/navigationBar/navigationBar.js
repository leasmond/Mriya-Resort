import React from "react";
import { NavLink } from "../../../styles/globalStyledComponents.js";
import { NavBar } from "../../../styles/styledComponents.js";

const NavigationBar = ({ color, mobile, mr, justifyContent, flexWrap }) => {
  return (
    <NavBar justifyContent={justifyContent} flexWrap={flexWrap}>
      <NavLink mr={mr} color={color} href="/complex">
        О комплексе
      </NavLink>
      <NavLink mr={mr} color={color} href="/blog">
        Блог
      </NavLink>
      <NavLink mr={mr} color={color} href="/faq">
        FAQ
      </NavLink>
      {mobile && (
        <>
          <NavLink mr={mr} color={color} href="/complex">
            Афиша
          </NavLink>
          <NavLink mr={mr} color={color} href="/blog">
            Спецпредложения
          </NavLink>
          <NavLink mr={mr} color={color} href="/faq">
            Важная информация
          </NavLink>
        </>
      )}
      <NavLink mr={mr} color={color} href="/contacts">
        Контакты
      </NavLink>
    </NavBar>
  );
};

export default NavigationBar;
