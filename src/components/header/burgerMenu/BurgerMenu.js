import { NavigationBar, SignIn } from "../../../common/components";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "react-tabs/style/react-tabs.css";
import {
  Column,
  Line,
  Row,
  Link,
  Subtitle,
  Circle,
  NavLink,
} from "../../../styles/globalStyledComponents";
import {
  BurgerContainer,
  Li,
  LiBlock,
  Ul,
  UlBlock,
  Visibile,
  MySwiper,
} from "../../../styles/styledComponents";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  RightArrowIcon,
  TwitterIcon,
} from "../../../assets/svg/icons";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Slider1 from "../../../assets/images/slider1.jpeg";
import Slider2 from "../../../assets/images/slider2.jpeg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const option = [
  {
    menu: "Размещение",
    submenu: ["Транспорт", "Размещение", "Развлечения"],
  },
  {
    menu: "Мероприятия",
    submenu: ["Бары и рестораны", "Мероприятия", "Спорт"],
  },
  {
    menu: "Красота и восстановлениe",
    submenu: ["Детям", "Спорт", "Размещение"],
  },
  {
    menu: "Бары и рестораны",
    submenu: ["Медицина", "Размещение", "Мероприятия"],
  },
  {
    menu: "Развлечения",
    submenu: ["Размещение", "Транспорт", "Спорт"],
  },
  {
    menu: "Спорт",
    submenu: ["Мероприятия", "Детям", "Бары и рестораны"],
  },
  {
    menu: "Детям",
    submenu: ["Детям", "Развлечения", "Мероприятия"],
  },
  {
    menu: "Транспорт",
    submenu: ["Транспорт", "Детям", "Медицина"],
  },
  {
    menu: "Медицина",
    submenu: ["Развлечения", "Спорт", "Размещение"],
  },
  {
    menu: "Мероприятия",
    submenu: ["Медицина", "Детям", "Транспорт"],
  },
  {
    menu: "Красота и восстановление",
    submenu: ["123", "456", "789"],
  },
];

export const BurgerMenu = ({ isOpen, wrapperRef }) => {
  const Block = ({ item }) => {
    return (
      <UlBlock>
        <Column justifyContent="space-between" height="552px">
          <Column>
            {item.submenu.map((i) => (
              <LiBlock>{i}</LiBlock>
            ))}
          </Column>
          <Subtitle
            fontSize="16px"
            lineHeight="24px"
            fontWeight="300"
            maxWidth="321px"
          >
            Международные стандарты лечения и современные методики в сочетании с
            высококлассным сервисом и проживанием в одном из лучших семейных
            курортов мира Mriya Resort & SPA 5*
          </Subtitle>
        </Column>
      </UlBlock>
    );
  };
  return (
    <>
      <Column
        displayM="none"
        position="absolute"
        background="rgba(255, 255, 255, 0.64)"
        maxWidth="1440px"
        width="100%"
        height="100vh"
        opacity={isOpen ? 1 : 0}
      />
      <BurgerContainer
        position="absolute"
        maxWidth="calc(100% - 80px)"
        width="100%"
        height="768px"
        background="#242424"
        isOpen={isOpen}
        hidden={isOpen ? "visible" : "hidden"}
        ref={wrapperRef}
      >
        <Row height="79px" ml="50px">
          <LogoIcon />
          <Row
            ml="48px"
            width="100%"
            maxWidth="979px"
            justifyContent="space-between"
          >
            <NavigationBar color="white" />
            <SignIn />
          </Row>
        </Row>
        <Column>
          <Line background="#C4C4C4" height="1px" width="100%" opacity="0.08" />
          <Row alignItems="flex-start">
            <Column
              height="100%"
              width="110px"
              alignItems="center"
              justifyContent="flex-start"
              ml="24px"
              mt="32px"
            >
              <Line height="368px" width="1px" opacity="0.24" />
              <Circle outline mt="32px">
                <FacebookIcon />
              </Circle>
              <Circle outline mt="32px">
                <TwitterIcon />
              </Circle>
              <Circle outline mt="32px">
                <InstagramIcon />
              </Circle>
            </Column>
            <Row
              borderBottom="1px solid rgba(217, 194, 135, 0.24)"
              justifyContent="space-between"
              width="100%"
            >
              <Row>
                <Ul>
                  {option.map((item, index) => (
                    <Li key={index}>
                      {item.menu}
                      <Visibile>
                        <RightArrowIcon color="rgba(255, 255, 255, 0.24)" />
                      </Visibile>
                      <Block item={item} />
                    </Li>
                  ))}
                </Ul>
                <Column
                  height="100%"
                  width="10px"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Line height="552px" width="1px" opacity="0.24" />
                </Column>
              </Row>
              <Column>
                <MySwiper
                  style={{
                    width: "420px",
                    height: "616px",
                  }}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                >
                  <SwiperSlide
                    style={{
                      background: `url(${Slider1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></SwiperSlide>
                  <SwiperSlide
                    style={{
                      background: `url(${Slider2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></SwiperSlide>
                </MySwiper>
              </Column>
            </Row>
          </Row>
          <Row justifyContent="flex-end">
            <NavLink color="rgba(255, 255, 255, 0.64)" mr="60px">
              info@mriyaresort.com
            </NavLink>
          </Row>
        </Column>
      </BurgerContainer>
    </>
  );
};
