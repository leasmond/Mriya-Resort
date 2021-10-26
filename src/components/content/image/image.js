import {
  Img,
  IconContainer,
  Column,
} from "../../../styles/globalStyledComponents";
import { PetalIcon, WeatherContainerIcon } from "../../../assets/svg/icons";
import Mask from "../../../assets/images/mask.png";
import CloudlyRight from "../../../assets/images/cloudlyRight.png";
import CloudlyLeft from "../../../assets/images/cloudlyLeft.png";
import PetalMobile from "../../../assets/images/petalMobile.png";
import PetalStrokeMobile from "../../../assets/images/petalStrokeMobile.png";
import FlowerGif from "../../../assets/gif/flower.gif";

export const Image = () => {
  return (
    <>
      <Img
        displayM="none"
        position="absolute"
        top="-1px"
        left="110px"
        height="936px"
        src={FlowerGif}
      />
      <Img displayM="none" position="absolute" top="0" left="0" src={Mask} />
      <Img
        displayD="none"
        position="absolute"
        top="14.27px"
        right="0"
        src={PetalMobile}
      />
      <Img
        displayD="none"
        position="absolute"
        top="-12px"
        right="0"
        src={PetalStrokeMobile}
      />
      <Column
        position="absolute"
        left="0"
        widthM="320px"
        top="1272px"
        topM="3602px"
        height="405px"
        overflow="hidden"
      >
        <Img src={CloudlyLeft} mb="-200px" />
      </Column>
      <Img
        position="absolute"
        right="0"
        widthM="213px"
        top="1632px"
        topM="2109px"
        src={CloudlyRight}
      />
      <IconContainer
        displayM="none"
        position="absolute"
        left="719px"
        top="611.7px"
      >
        <PetalIcon />
      </IconContainer>
      <IconContainer
        displayM="none"
        position="absolute"
        top="611.73px"
        right="0"
      >
        <WeatherContainerIcon />
      </IconContainer>
    </>
  );
};
