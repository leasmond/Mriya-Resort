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
  ButtonStyle,
} from "../../../styles/globalStyledComponents";
import {
  MobileBurgerContainer as BurgerContainer,
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
    menu: "Размещение2",
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

export const MobileBurgerMenu = ({ isOpen, wrapperRef }) => {
  const Block = ({ item }) => {
    return (
      <UlBlock
        display="none"
        position="relative"
        ml="0"
        mt="0"
        height="0"
        width="100%"
        pl="0"
        pr="0"
        top="none"
      >
        <Column p="16px 26px">
          {item.submenu.map((i) => (
            <LiBlock width="auto" fontSize="16px" lineHeight="24px" p="6px">
              {i}
            </LiBlock>
          ))}
        </Column>
      </UlBlock>
    );
  };
  return (
    <BurgerContainer
      position="absolute"
      width="100%"
      maxWidth="calc(100% - 80px)"
      height="768px"
      background="#242424"
      isOpen={isOpen}
      hidden={isOpen ? "visible" : "hidden"}
      ref={wrapperRef}
    >
      <Row height="79px" background="#3D3C3C">
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
      <Column>
        <Line background="#C4C4C4" height="1px" width="100%" opacity="0.08" />
        <Row alignItems="flex-start">
          {/* <Column
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
          </Column> */}
          <Row
            borderBottom="1px solid rgba(217, 194, 135, 0.24)"
            justifyContent="space-between"
            width="100%"
          >
            <Row width="100%">
              <Ul pt="0" width="100%" maxWidth="1000px">
                {option.map((item, index) => (
                  <>
                    <Li
                      key={index}
                      width="100%"
                      p="0"
                      borderRadius="0"
                      height="auto"
                    >
                      <Subtitle
                        fontSize="20px"
                        lineHeight="55px"
                        hover
                        color="white"
                        p="0 16px"
                        width="100%"
                        maxWidth="288px"
                        borderTop="1px solid rgba(217, 194, 135, 0.08)"
                        fontWeight="300"
                      >
                        {item.menu}
                      </Subtitle>
                      <Block item={item} />
                    </Li>
                    <Visibile>
                      <RightArrowIcon color="rgba(255, 255, 255, 0.24)" />
                    </Visibile>
                  </>
                ))}
              </Ul>
            </Row>
          </Row>
        </Row>
        <Row justifyContent="center" flexDirection="column" pl="16px" pr="16px">
          <ButtonStyle width="100%">Найти номер</ButtonStyle>
          <NavigationBar mobile color="white" />
        </Row>
      </Column>
    </BurgerContainer>
  );
};
