import React, { useState } from "react";
import { NavLink } from "../../../styles/globalStyledComponents.js";
import { NavBar } from "../../../styles/styledComponents.js";

const NavigationBar = ({ color, mobile }) => {
  return (
    <NavBar>
      <NavLink color={color} href="/complex">
        О комплексе
      </NavLink>
      <NavLink color={color} href="/blog">
        Блог
      </NavLink>
      <NavLink color={color} href="/faq">
        FAQ
      </NavLink>
      {mobile && (
        <>
          <NavLink color={color} href="/complex">
            Афиша
          </NavLink>
          <NavLink color={color} href="/blog">
            Спецпредложения
          </NavLink>
          <NavLink color={color} href="/faq">
            Важная информация
          </NavLink>
        </>
      )}
      <NavLink color={color} href="/contacts">
        Контакты
      </NavLink>
    </NavBar>
  );
};

export default NavigationBar;
