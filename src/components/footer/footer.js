import { LogoIcon } from "../../assets/svg/icons";
import { Column, Img } from "../../styles/globalStyledComponents";
import Tablet from "../../assets/images/tablet.png";
import MriyaResort from "../../assets/images/mriyaResort.png";

export const Footer = () => {
  return (
    <Column alignItems="center" position="relative">
      <Img
        displayM="none"
        width="calc(100% + 48px)"
        mt="150px"
        src={MriyaResort}
      />
      <Img
        displayM="none"
        width="616px"
        src={Tablet}
        position="absolute"
        top="-158px"
      />
      <Column mt="246px" mtM="128px" mb="79px">
        <LogoIcon />
      </Column>
    </Column>
  );
};
