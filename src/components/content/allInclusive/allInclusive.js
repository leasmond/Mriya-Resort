import React, { useRef } from "react";
import {
  AllInclusiveIconLeft,
  AllInclusiveIconRight,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../assets/svg/icons";
import {
  Circle,
  Column,
  H2,
  Img,
  Link,
  Row,
  Subtitle,
  SwiperCustomInclusive,
} from "../../../styles/globalStyledComponents";
import All1 from "../../../assets/images/all1.png";
import All2 from "../../../assets/images/all2.png";
import All3 from "../../../assets/images/all3.png";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation]);

export const AllInclusive = () => {
  const Title = ({ children, maxWidth, mb, mt, p }) => {
    return (
      <>
        <Subtitle
          mt="22px"
          mb="10px"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="300"
          width="100%"
          maxWidth="calc(100% - 32px)"
        >
          {children}
        </Subtitle>
        <Row width="calc(100% - 32px)" p={p} maxWidth={maxWidth}>
          <Link
            fontSize="10px"
            fontWeight="600"
            lineHeight="24px"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color="#AB955E"
          >
            Читать больше —
          </Link>
        </Row>
      </>
    );
  };
  const Slide1 = ({ mt, alignSelf, alignSelfM }) => {
    return (
      <Column
        background="transparent"
        hoverContainer
        alignItems="center"
        p="8px"
        borderRadius="8px"
        minWidth="260px"
        maxWidth="560px"
        maxWidthM="1000px"
        width="100%"
        mt={mt}
        alignSelf={alignSelf}
        alignSelfM={alignSelfM}
      >
        <Img
          maxWidth="560px"
          maxWidthM="1000px"
          heightM="232px"
          width="100%"
          borderRadius="8px"
          src={All1}
        />
        <Title width="100%" mt="22px" mb="49px">
          Заниматесь в тренажерном зале и посещайте групповые тренировки
        </Title>
      </Column>
    );
  };
  const Slide2 = ({ mt, alignSelf, alignSelfM }) => {
    return (
      <Column
        background="transparent"
        p="8px"
        alignItems="center"
        borderRadius="8px"
        hoverContainer
        mt={mt ? mt : "-6px"}
        minWidth="260px"
        maxWidth="260px"
        maxWidthM="1000px"
        width="100%"
        alignSelf={alignSelf}
        alignSelfM={alignSelfM}
      >
        <Subtitle
          displayM="none"
          fontSize="14px"
          lineHeight="24px"
          fontWeight="500"
          letterSpacing="0.08em"
          color="#999999"
          textTransform="uppercase"
        >
          Оздоровление
        </Subtitle>
        <Subtitle
          displayM="none"
          fontSize="24px"
          lineHeight="32px"
          fontWeight="300"
          color="#3D3C3C"
          maxWidth="260px"
          mt="24px"
          mb="49px"
        >
          Mriya Resort — это маленький город со множеством возможностей, каждый
          найдет себе занятие по вкусу
        </Subtitle>
        <Img
          maxWidth="260px"
          maxWidthM="1000px"
          heightM="232px"
          width="100%"
          borderRadius="8px"
          src={All2}
        />
        <Title width="100%">
          Питаться в ресторане шведской линии согласно выбранному варианту
        </Title>
      </Column>
    );
  };
  const Slide3 = ({ mt, alignSelf, alignSelfM }) => {
    return (
      <Column
        p="8px"
        background="transparent"
        borderRadius="8px"
        hoverContainer
        mt={mt}
        mtM="0"
        alignItems="center"
        minWidth="260px"
        maxWidth="260px"
        maxWidthM="1000px"
        width="100%"
        alignSelf={alignSelf}
        alignSelfM={alignSelfM}
      >
        <Img
          maxWidth="260px"
          maxWidthM="1000px"
          heightM="232px"
          src={All3}
          borderRadius="8px"
          width="100%"
        />
        <Title width="100%">
          Исследовать все общедоступные зоны и территории комплекса
        </Title>
      </Column>
    );
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Column
      maxWidth="1440px"
      widthM="100%"
      heightM="auto"
      p="77px 108px 72px 108px"
      mlM="-16px"
      pM="24px 16px"
      borderRadius="24px"
      background="#F6F6F6"
    >
      <Column position="absolute" right="0" displayM="none">
        <AllInclusiveIconRight />
      </Column>
      <Column position="absolute" left="0" displayM="none">
        <AllInclusiveIconLeft />
      </Column>
      <Column width="100%" maxWidth="1160px" overflow="hidden">
        <Row zIndex="100" maxWidth="1160px" width="100%" mb="42px" mbM="24px">
          <H2 mr="40px">Все включено</H2>
          <Circle
            width="40px"
            height="40px"
            background="#D9C287"
            mr="16px"
            ref={navigationPrevRef}
            hover
            cursor="pointer"
          >
            <LeftArrowIcon color="white" />
          </Circle>
          <Circle
            ref={navigationNextRef}
            width="40px"
            height="40px"
            background="#D9C287"
            cursor="pointer"
            hover
          >
            <RightArrowIcon color="white" />
          </Circle>
        </Row>
        <Row
          width="100%"
          maxWidth="1160px"
          justifyContent="space-between"
          zIndex="1"
        >
          <SwiperCustomInclusive
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            spaceBetween={60}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Slide1 alignSelf="flex-start" alignSelfM="center" />
              <Slide2 alignSelf="center" alignSelfM="center" />
              <Slide3 alignSelf="flex-start" alignSelfM="center" mt="-60px" />
            </SwiperSlide>
            <SwiperSlide>
              <Slide2 alignSelf="flex-start" alignSelfM="center" />
              <Slide3 alignSelf="center" alignSelfM="center" />
              <Slide1 alignSelf="flex-start" alignSelfM="center" mt="-60px" />
            </SwiperSlide>
            <SwiperSlide>
              <Slide3 alignSelf="flex-start" alignSelfM="center" />
              <Slide1 alignSelf="center" alignSelfM="center" />
              <Slide2 alignSelf="flex-start" alignSelfM="center" mt="-60px" />
            </SwiperSlide>
          </SwiperCustomInclusive>
        </Row>
      </Column>
    </Column>
  );
};
