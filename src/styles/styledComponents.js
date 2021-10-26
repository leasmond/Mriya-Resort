import { Accordion, AccordionItemButton } from "react-accessible-accordion";
import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";
import { Column, Subtitle } from "./globalStyledComponents";
import { media } from "./media";

const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  z-index: 1000;
  height: 79px;
  min-height: 79px;
  border-bottom: 1px solid rgba(61, 60, 60, 0.08);
  justify-content: space-between;
  min-width: 320px;
  width: 100%;
  ${media.mobile} {
    position: fixed;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  }
`;

const Wrapper = styled.div`
  padding: 24px;
  ${media.mobile} {
    padding: 16px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: ${(props) => props.flexWrap};
  align-items: center;
  max-width: 470px;
  width: 100%;
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
`;
// const widthBurger = "100%";
const BurgerButton = styled.button`
  ${media.desktop} {
    min-width: 80px;
    height: 80px;
    background: #3d3c3c;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #303030;
    transform: translateX(0px);
    transition: 0.4s;
    ${(props) =>
      props.isOpen &&
      css`
        transform: translate(${(props) => props.translate + "px" || 0});
        transition: 0.4s;
      `}
  }
  ${media.mobile} {
    display: none;
  }
`;

const MobileBurgerButton = styled.button`
  ${media.mobile} {
    min-width: 80px;
    height: 80px;
    background: #3d3c3c;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0px);
    transition: 0.4s;
    border-bottom: 1px solid #303030;
    ${(props) =>
      props.isOpen &&
      css`
        transform: translate(${(props) => props.translate + "px" || 0});
        transition: 0.4s;
      `}
  }
  ${media.desktop} {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems};
    justify-content: flex-start;
    overflow: scroll;
    margin: ${(props) => props.m};
    margin-bottom: ${(props) => props.mb};
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    padding: ${(props) => props.p};
    padding-bottom: ${(props) => props.pb};
    padding-top: ${(props) => props.pt};
    padding-left: ${(props) => props.pl};
    padding-right: ${(props) => props.pr};
    position: ${(props) => props.position};
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    background-image: ${(props) =>
      props.backgroundImage && `url('${props.backgroundImage}')`};
    background-size: ${(props) => props.backgroundSize};
    background-position: ${(props) => props.backgroundPosition};
    background-repeat: ${(props) => props.backgroundRepeat};
    visibility: ${(props) => props.hidden};
    ${(props) =>
      props.isOpen
        ? css`
            transform: translateX(0);
            transition: 0.4s;
          `
        : css`
            transform: translateX(-100%);
            transition: 0.4s;
          `};
  }
`;

const MobileBurgerContainer = styled.div`
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems};
    justify-content: flex-start;
    margin: ${(props) => props.m};
    margin-bottom: ${(props) => props.mb};
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    padding: ${(props) => props.p};
    padding-bottom: ${(props) => props.pb};
    padding-top: ${(props) => props.pt};
    padding-left: ${(props) => props.pl};
    padding-right: ${(props) => props.pr};
    position: ${(props) => props.position};
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    background-image: ${(props) =>
      props.backgroundImage && `url('${props.backgroundImage}')`};
    background-size: ${(props) => props.backgroundSize};
    background-position: ${(props) => props.backgroundPosition};
    background-repeat: ${(props) => props.backgroundRepeat};
    visibility: ${(props) => props.hidden};
    ${(props) =>
      props.isOpen
        ? css`
            transform: translateX(0);
            transition: 0.4s;
          `
        : css`
            transform: translateX(-100%);
            transition: 0.4s;
          `}
  }
`;

const BurgerIcon = styled.div`
  height: 26px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const BurgerItems = styled.li`
  list-style-type: none;
  border-bottom: 2px solid white;
  width: 32px;
  transition: 0.6s;
  &:last-child {
    width: 24px;
  }
  &:nth-of-type(1n) {
    transform: ${(props) =>
      props.hide ? "translateY(12px) rotate(45deg)" : "rotate(0deg)"};
  }
  &:nth-of-type(2n) {
    transform: ${(props) => (props.hide ? "rotate(-45deg)" : "rotate(0deg)")};
  }
  &:nth-of-type(3n) {
    transform: ${(props) =>
      props.hide
        ? " translateY(-10px) translateX(2px) rotate(-45deg)"
        : "rotate(0deg)"};
  }
`;

const StarsContainer = styled.div`
  display: block;
  background: white;
  width: 88px;
  margin-top: 4px;
  ${media.mobile} {
    display: none;
  }
`;

const UlBlock = styled.ul`
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  opacity: 0;
  display: ${(props) => (props.display ? props.display : "none")};
  position: ${(props) => (props.position ? props.position : "absolute")};
  height: ${(props) => (props.height ? props.height : "616px")};
  width: ${(props) => (props.width ? props.width : "479px")};
  margin-left: ${(props) => (props.ml ? props.ml : "336px")};
  z-index: 1;
  top: ${(props) => (props.top ? props.top : "113px")};
  padding-left: ${(props) => (props.pl ? props.pl : "80px")};
  padding-right: ${(props) => (props.pr ? props.pr : "39px")};
`;

const LiBlock = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: ${(props) => (props.width ? props.width : "308px")};
  margin-bottom: 32px;
  list-style: none;
  border-radius: 8px;
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "32px")};
  padding: ${(props) => props.p};
  &:hover {
    color: ${(props) => props.theme.palette.gold.main};
  }
`;

const Ul = styled.ul`
  background: #242424;
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  padding-top: ${(props) => (props.pt ? props.pt : "23px")};
  padding-inline-start: 0;
  margin: 0;
  height: 590px;
  width: ${(props) => (props.width ? props.width : "394px")};
  max-width: ${(props) => props.maxWidth};
  overflow-y: auto;
`;

const Visibile = styled.div`
  display: none;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: ${(props) => (props.width ? props.width : "308px")};
  height: ${(props) => (props.height ? props.height : "64px")};
  padding: ${(props) => (props.p ? props.p : "0 28px 0 24px")};
  list-style: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  border-bottom: ${(props) => props.borderBottom};
  &:hover {
    display: flex;
    background: rgba(217, 194, 135, 0.16);
    ${Visibile} {
      opacity: 1;
      height: auto;
      display: block;
    }
    ${UlBlock} {
      opacity: 1;
      height: auto;
      display: block;
    }
  }
`;

const MySwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background-color: white;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #d9c287;
  }
`;

const AccordionItemButtonCustom = styled(AccordionItemButton)`
  height: 56px;
  display: flex;
  align-items: center;
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  padding: 0 16px;
  color: white;
  ${Column} {
    display: none;
  }
  &[aria-expanded="true"] {
    background: rgba(217, 194, 135, 0.16);
    ${Subtitle} {
      border-bottom: none;
    }
    ${Column} {
      display: block;
    }
  }
`;

const AccordionCustom = styled(Accordion)`
  width: 100%;
  .accordion__panel {
    padding: 6px 32px;
    :last-child {
      padding-bottom: 18px;
    }
    :nth-child(2) {
      padding-top: 18px;
    }
    p {
      margin: 0;
    }
  }
`;

export {
  HeaderContainer,
  BurgerButton,
  MobileBurgerButton,
  BurgerContainer,
  MobileBurgerContainer,
  BurgerIcon,
  BurgerItems,
  NavBar,
  StarsContainer,
  Wrapper,
  Ul,
  UlBlock,
  Li,
  LiBlock,
  Visibile,
  MySwiper,
  AccordionItemButtonCustom,
  AccordionCustom,
};
