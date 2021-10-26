import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Row, SwiperCustom } from "../../../../styles/globalStyledComponents";
import "react-tabs/style/react-tabs.css";
import Special from "./special";
import One from "../../../../assets/images/one.png";
import Two from "../../../../assets/images/two.png";
import Three from "../../../../assets/images/three.png";
import Four from "../../../../assets/images/four.png";
import Five from "../../../../assets/images/five.png";
import Six from "../../../../assets/images/six.png";

const screenWidth = window.screen.width;

const specialsData = [
  {
    image: One,
    percent: "20%",
    title: "Для тех кто рядом",
  },
  {
    image: Two,
    percent: "20%",
    title: "Раннее бронирование",
  },
  {
    image: Three,
    percent: "20%",
    title: "Для тех кто рядом",
  },
  {
    image: Four,
    percent: "20%",
    title: "Раннее бронирование",
  },
  {
    image: Five,
    percent: "20%",
    title: "Для тех кто рядом",
  },
  {
    image: Six,
    percent: "20%",
    title: "Раннее бронирование",
  },
];

const TabPanelCustom = ({ variantTwo }) => {
  return (
    <Row mrM="0" mr="-140px">
      <SwiperCustom
        direction={screenWidth > 1024 ? "horizontal" : "vertical"}
        slidesPerView={"auto"}
      >
        {specialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <Special item={item} variantTwo={variantTwo} />
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </Row>
  );
};

export default TabPanelCustom;
