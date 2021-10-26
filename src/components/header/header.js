import React, { useRef, useState } from "react";
import {
  NavLink,
  Column,
  Row,
  GlobalStyle,
} from "../../styles/globalStyledComponents.js";
import {
  BurgerButton,
  MobileBurgerButton,
  BurgerIcon,
  BurgerItems,
  HeaderContainer,
  StarsContainer,
} from "../../styles/styledComponents.js";
import { LogoIcon, SignInIcon, StarsIcon } from "../../assets/svg/icons";
import { BurgerMenu } from "./burgerMenu/BurgerMenu.js";
import { NavigationBar, SignIn } from "../../common/components/index";
import { MobileBurgerMenu } from "./modileBurgerMenu/mobileBurgerMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const burgerMenuRef = useRef();
  const mobileBurgerMenuRef = useRef();

  return (
    <HeaderContainer id="test">
      <GlobalStyle hidden={show} />
      <BurgerMenu isOpen={show} wrapperRef={burgerMenuRef} />
      <MobileBurgerMenu isOpen={show} wrapperRef={mobileBurgerMenuRef} />
      <BurgerButton
        isOpen={show}
        onClick={() => {
          setShow(!show);
          window.scrollTo(0, 0);
        }}
        translate={show ? burgerMenuRef.current?.clientWidth : 0}
      >
        <BurgerIcon>
          <BurgerItems hide={show}></BurgerItems>
          <BurgerItems hide={show}></BurgerItems>
          <BurgerItems hide={show}></BurgerItems>
        </BurgerIcon>
      </BurgerButton>
      <MobileBurgerButton
        isOpen={show}
        onClick={() => setShow(!show)}
        translate={show ? mobileBurgerMenuRef.current?.clientWidth - 80 : 0}
      >
        <BurgerIcon>
          <BurgerItems hide={show}></BurgerItems>
          <BurgerItems hide={show}></BurgerItems>
          <BurgerItems hide={show}></BurgerItems>
        </BurgerIcon>
      </MobileBurgerButton>
      <Row
        displayM="none"
        width="100%"
        maxWidth="530px"
        minWidth="400px"
        justifyContent="end"
      >
        <NavigationBar />
      </Row>
      <Column
        maxWidth="220px"
        width="100%"
        height="86px"
        heightM="56px"
        mtM="8px"
        alignItems="center"
        justifyContent="end"
      >
        <LogoIcon />
        <StarsContainer>
          <StarsIcon />
        </StarsContainer>
      </Column>
      <Column
        displayL="none"
        alignItems="center"
        minWidth="79px"
        height="80px"
        media="none"
        borderLeft="1px solid rgba(61, 60, 60, 0.08)"
      >
        <SignInIcon width="30px" height="16px" color="black" />
      </Column>
      <Row
        displayM="none"
        maxWidth="610px"
        width="100%"
        justifyContent="space-between"
      >
        <Row
          pl="10px"
          maxWidth="70px"
          minWidth="60px"
          width="100%"
          justifyContent="space-between"
        >
          <NavLink href="/ru">Ru</NavLink>
          <NavLink href="/eng" color="rgba(0, 0, 0, 0.24)">
            Eng
          </NavLink>
        </Row>
        <Row maxWidth="372px" width="100%" justifyContent="left">
          <SignIn />
          <NavLink mr="0" color="white" href="/tel: 8 800 500 6847">
            8 800 500 6847
          </NavLink>
        </Row>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
