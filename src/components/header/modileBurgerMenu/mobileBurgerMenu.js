import { NavigationBar } from "../../../common/components";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "react-tabs/style/react-tabs.css";
import {
  Column,
  Line,
  Row,
  Subtitle,
  ButtonStyle,
  Circle,
  NavLink,
} from "../../../styles/globalStyledComponents";
import {
  MobileBurgerContainer as BurgerContainer,
  AccordionItemButtonCustom,
  AccordionCustom,
} from "../../../styles/styledComponents";
import {
  DownArrowIcon,
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from "../../../assets/svg/icons";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { option } from "../data";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const MobileBurgerMenu = ({ isOpen, wrapperRef }) => {
  return (
    <BurgerContainer
      position="absolute"
      width="100%"
      maxWidth="calc(100% - 80px)"
      height="100vh"
      background="#242424"
      isOpen={isOpen}
      hidden={isOpen ? "visible" : "hidden"}
      ref={wrapperRef}
    >
      <Row
        minHeight="79px"
        height="79px"
        borderBottom="1px solid #303030"
        background="#3D3C3C"
      >
        <Column width="calc(50% - 33px)">
          <Subtitle
            fontSize="20px"
            letterSpacing="0.08em"
            fontWeight="300"
            width="80px"
            color="white"
            textAlign="center"
          >
            RU
          </Subtitle>
        </Column>
        <Column>
          <LogoIcon />
        </Column>
      </Row>
      <Column justifyContent="flex-start" overflow="auto">
        <Line background="#C4C4C4" height="1px" width="100%" opacity="0.08" />
        <Column mb="39px" alignItems="flex-start">
          <AccordionCustom allowZeroExpanded>
            {option.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButtonCustom>
                    <Subtitle
                      fontSize="20px"
                      lineHeight="56px"
                      color="white"
                      fontWeight="300"
                      borderBottom="1px solid rgba(217, 194, 135, .08)"
                      width="100%"
                    >
                      {item.menu}
                    </Subtitle>
                    <Column>
                      <DownArrowIcon color="rgba(255, 255, 255, 0.24)" />
                    </Column>
                  </AccordionItemButtonCustom>
                </AccordionItemHeading>
                {item.submenu.map((i, index) => (
                  <AccordionItemPanel key={index}>
                    <Subtitle
                      fontSize="16px"
                      lineHeight="24px"
                      color="white"
                      fontWeight="300"
                      hoverText
                    >
                      {i}
                    </Subtitle>
                  </AccordionItemPanel>
                ))}
              </AccordionItem>
            ))}
          </AccordionCustom>
        </Column>
        <Row
          display="flex"
          justifyContent="center"
          pl="16px"
          pr="16px"
          style={{ flexDirection: "column" }}
        >
          <ButtonStyle mb="44px" width="100%">
            Найти номер
          </ButtonStyle>
          <NavigationBar
            justifyContent="center"
            flexWrap="wrap"
            mr="28px"
            mobile
            color="white"
          />
          <Row
            mt="22px"
            mb="34px"
            maxWidth="192px"
            width="100%"
            justifyContent="space-between"
          >
            <Circle outline>
              <FacebookIcon />
            </Circle>
            <Circle outline>
              <TwitterIcon />
            </Circle>
            <Circle outline>
              <InstagramIcon />
            </Circle>
          </Row>
        </Row>
        <Row style={{ flexDirection: "column" }} alignItems="center" mb="38px">
          <NavLink mb="16px" mr="0" color="white" href="/tel: 8 800 500 6847">
            8 800 500 68
          </NavLink>
          <NavLink color="rgba(255, 255, 255, 0.64)">
            info@mriyaresort.com
          </NavLink>
        </Row>
      </Column>
    </BurgerContainer>
  );
};
