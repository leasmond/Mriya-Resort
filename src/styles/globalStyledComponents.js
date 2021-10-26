import styled, { css, createGlobalStyle } from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { media } from "./media";

const GlobalStyle = createGlobalStyle`
${(props) =>
  props.hidden &&
  css`
    body {
      overflow: hidden;
    }
  `}
`;

const IconContainer = styled.div`
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  ${media.mobile} {
    display: ${(props) => props.displayM};
  }
`;

const Img = styled.img`
  display: ${(props) => props.display};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  max-width: ${(props) => props.maxWidth};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  border-radius: ${(props) => props.borderRadius};
  ${media.mobile} {
    display: ${(props) => props.displayM};
    top: ${(props) => props.topM};
    width: ${(props) => props.widthM};
    max-width: ${(props) => props.maxWidthM};
    height: ${(props) => props.heightM};
  }
  ${media.desktop} {
    display: ${(props) => props.displayD};
  }
`;

const ButtonStyle = styled.button`
  background: ${(props) =>
    props.background === "black"
      ? props.theme.palette.black.main
      : props.background
      ? props.theme.palette.black.main
      : "linear-gradient(0deg, #bca56a, #bca56a), #86c1db"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  border: none;
  max-width: 200px;
  min-width: 124px;
  width: ${(props) => (props.width ? props.width : "198px")};
  height: ${(props) => (props.height ? props.height : "64px")};
  min-height: ${(props) => props.minHeight};
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  border: ${(props) =>
    props.border && `1px solid ${props.theme.palette.gold.main}`};
  ${(props) =>
    props.outline &&
    css`
      background: none;
      border: ${(props) => `1px solid ${props.theme.palette.gold.main}`};
      color: ${(props) => props.theme.palette.black.main};
    `}
  ${media.mobile} {
    height: ${(props) => props.heightM};
    max-width: 100%;
    margin: ${(props) => props.mM};
    margin-top: ${(props) => props.mtM};
    margin-bottom: ${(props) => props.mbM};
    margin-right: ${(props) => props.mrM};
    margin-left: ${(props) => props.mrL};
    margin: ${(props) => props.mM};
    border-radius: 8px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  overflow-x: clip;
  position: relative;
  margin: 0 auto;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) =>
    props.gold
      ? props.theme.palette.gold.main
      : props.color
      ? props.color
      : props.theme.palette.black.main};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  &:hover {
    color: ${(props) => props.theme.palette.gold.main};
  }
`;

const Link = styled.a`
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Euclid Circular B"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 300)};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  margin: ${(props) => props.m};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  padding: ${(props) => props.p};
  color: ${(props) =>
    props.color ? props.color : props.theme.palette.black.main};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) =>
    props.gold
      ? props.theme.palette.gold.main
      : props.color
      ? props.color
      : props.theme.palette.black.main};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  border-bottom: ${(props) => props.borderBottom};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  z-index: ${(props) => props.zIndex};
  justify-content: ${(props) => props.justifyContent};
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
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  background-image: ${(props) =>
    props.backgroundImage && `url('${props.backgroundImage}')`};
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  overflow: ${(props) => props.overflow};
  border-bottom: ${(props) => props.borderBottom};
  ${media.desktop} {
    display: ${(props) => props.displayL};
  }
  ${media.mobile} {
    display: ${(props) => props.displayM};
    margin-bottom: ${(props) => props.mbM};
    margin-right: ${(props) => props.mrM};
    justify-content: ${(props) => props.justifyContentM};
    height: ${(props) => props.heightM};
    flex-wrap: ${(props) => props.flexWrap && "wrap"};
    max-width: ${(props) => props.maxWidthM};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-self: ${(props) => props.alignSelf};
  align-items: ${(props) => props.alignItems};
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
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  opacity: ${(props) => props.opacity};
  border-radius: ${(props) => props.borderRadius};
  border-left: ${(props) => props.borderLeft};
  background-image: ${(props) =>
    props.backgroundImage && `url('${props.backgroundImage}')`};
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  visibility: ${(props) => props.hidden};
  overflow: ${(props) => props.overflow};
  transition: 0.4s;
  flex-wrap: ${(props) => props.flexWrap};
  ${(props) =>
    props.hoverContainer &&
    css`
      &:hover {
        background: white;
        box-shadow: 0px 8px 16px rgba(142, 124, 78, 0.16);
        transition: 0.4s;
      }
    `}
  ${media.desktop} {
    display: ${(props) => props.displayL};
  }
  ${media.mobile} {
    display: ${(props) => props.displayM};
    align-self: ${(props) => props.alignSelfM};
    height: ${(props) => props.heightM};
    margin-top: ${(props) => props.mtM};
    margin-left: ${(props) => props.mlM};
    margin-bottom: ${(props) => props.mbM};
    margin: ${(props) => props.mM};
    padding: ${(props) => props.pM};
    left: ${(props) => props.leftM};
    width: ${(props) => props.widthM};
    max-width: ${(props) => props.maxWidthM};
    top: ${(props) => props.topM};
  }
`;

//-------- Typography ------------//

const H1 = styled.h1`
  color: black;
  font-family: "SangBleu Kingdom";
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  color: ${(props) => props.theme.palette.black.main};
  margin: ${(props) => (props.m ? props.m : "0px")};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  ${media.mobile} {
    font-size: 64px;
    line-height: 72px;
    margin-bottom: ${(props) => props.mbM};
  }
`;
const H2 = styled.h2`
  font-family: SangBleu Kingdom;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 56px;
  color: ${(props) => props.theme.palette.black.main};
  margin: ${(props) => (props.m ? props.m : "0px")};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  ${media.mobile} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: ${(props) => props.mbM};
    margin-top: ${(props) => props.mtM};
  }
`;
const H3 = styled.h3`
  font-family: SangBleu Kingdom;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  font-size: 40px;
  line-height: 56px;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.theme.palette.black.main};
  margin: ${(props) => (props.m ? props.m : "0px")};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  ${media.mobile} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: ${(props) => props.mbM};
    margin-top: ${(props) => props.mtM};
  }
`;

const Subtitle = styled.p`
  font-style: normal;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Euclid Circular B"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "32px")};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "initial")};
  text-transform: ${(props) => props.textTransform && props.textTransform};
  margin: ${(props) => (props.m ? props.m : "0px")};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  padding: ${(props) => (props.p ? props.p : "0px")};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  color: ${(props) =>
    props.color ? props.color : props.theme.palette.black.main};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  right: ${(props) => props.right};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  ${media.mobile} {
    display: ${(props) => props.displayM};
    margin-top: ${(props) => props.mtM};
    margin-bottom: ${(props) => props.mbM};
    font-size: ${(props) => props.fontSizeM};
    line-height: ${(props) => props.lineHeightM};
  }
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background: rgba(217, 194, 135, 0.16);
      }
    `}
`;

const Line = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  background: ${(props) =>
    props.background ? props.background : props.theme.palette.gold.main};
  opacity: ${(props) => props.opacity};
  ${media.mobile} {
    margin-bottom: ${(props) => props.mbM};
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "46px"};
  height: ${(props) => (props.height ? props.height : "46px")};
  width: ${(props) => (props.width ? props.width : "46px")};
  cursor: ${(props) => props.cursor && "pointer"};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding-left: ${(props) => props.pl};
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background: rgba(61, 60, 60, 0.05);
      }
    `}
  ${(props) =>
    props.outline &&
    css`
      border: ${(props) =>
        props.border
          ? props.border
          : `1px solid ${props.theme.palette.gold.main}`};
    `}
    ${media.mobile} {
    left: ${(props) => props.leftM};
  }
`;

//----------------- Tabs -------------------//

const STabs = styled(Tabs)`
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: 100%;
  &.isSelected {
    color: ${(props) => props.theme.palette.gold.main};
  }
`;

const STabList = styled(TabList)`
  list-style-type: none;
  margin: 4px;
  padding: 0;
  display: flex;
  position: relative;
  overflow-x: auto;
  padding-inline-start: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.mobile} {
    padding: 0 20px;
    width: calc(100% + 20px);
    margin-left: -16px;
  }
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  margin-right: 48px;
  white-space: nowrap;
  padding: 0;
  padding-bottom: 5px;
  user-select: none;
  cursor: pointer;
  &.isSelected {
    color: ${(props) => props.theme.palette.gold.main};
    border-bottom: ${(props) => `2px solid ${props.theme.palette.gold.main}`};
  }
`;
STab.tabsRole = "Tab";

const SwiperCustomInclusive = styled(Swiper)`
  height: auto;
  display: flex;
  max-width: 1160px;
  width: 100%;
  overflow: visible;
  .swiper-slide {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
  }
  ${media.mobile} {
    .swiper-slide {
      width: 100%;
      flex-direction: column;
    }
  }
`;

const SwiperCustom = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: calc(100vw - (100vw - 1160px) / 2);
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-slide {
    margin-right: 30px;
    max-width: 360px;
    width: 100%;
    flex-direction: row;
    height: 232px;
    ${media.mobile} {
      margin: 16px 0;
      ${"" /* margin-bottom: 32px; */}
    }
  }
  .swiper-wrapper {
    ${media.mobile} {
      align-items: center;
      height: 528px;
    }
  }
`;

const SwiperSlideCustom = styled(SwiperSlide)`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 360)};
  margin-right: ${(props) => (props.mr ? props.mr : 30)};
  width: 100%;
  ${media.mobile} {
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    max-width: ${(props) => props.maxWidth};
    margin-right: ${(props) => props.mr};
  }
`;

export {
  ButtonStyle,
  ButtonLink,
  Link,
  Container,
  Column,
  Circle,
  Row,
  NavLink,
  H1,
  H2,
  H3,
  Subtitle,
  Span,
  IconContainer,
  Img,
  Line,
  STabs,
  STab,
  STabList,
  SwiperCustom,
  SwiperSlideCustom,
  SwiperCustomInclusive,
  GlobalStyle,
};
