import {
  CloudlyIcon,
  DownArrowIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  WavesThreeIcon,
} from "../../../assets/svg/icons";
import {
  H1,
  Column,
  Circle,
  Row,
  Subtitle,
  Line,
  ButtonStyle,
} from "../../../styles/globalStyledComponents";

export const Main = () => {
  return (
    <Row alignItems="flex-start" justifyContent="space-between" width="100%">
      <Column>
        <Column ml="-91px" mt="-23px" mtM="0" mb="23px">
          <WavesThreeIcon />
        </Column>
        <Subtitle
          fontSize="14px"
          fontWeight="500"
          lineHeight="24px"
          textTransform="uppercase"
          letterSpacing="0.08em"
          mb="47px"
          mbM="30px"
        >
          Family & Health Club
        </Subtitle>
        <H1 mb="41px" mbM="28px">
          Mriya <br /> Resort
        </H1>
        <Subtitle
          mb="57px"
          mbM="39px"
          fontSize="24px"
          fontSizeM="20px"
          lineHeight="32px"
          fontWeight="300"
          width="100%"
          maxWidth="410px"
          minWidth="288px"
        >
          Российский курорт для всей семьи на берегу черного моря
        </Subtitle>
        <Row mb="24px" mbM="48px">
          <ButtonStyle width="100%" mr="40px" mrM="14px">
            Найти номер
          </ButtonStyle>
          <ButtonStyle width="100%" outline>
            3D Тур
          </ButtonStyle>
        </Row>
        <Row displayM="none" ml="32px" mb="24px">
          <Line height="48px" width="1px" />
        </Row>
        <Row justifyContentM="center">
          <Circle outline width="62px" height="62px" borderRadius="62px">
            <DownArrowIcon />
          </Circle>
        </Row>
      </Column>
      <Column
        mr="-64px"
        mt="160px"
        height="535px"
        justifyContent="space-between"
        displayM="none"
      >
        <Column
          alignItems="flex-end"
          height="256px"
          justifyContent="space-between"
        >
          <Circle width="64px" height="64px" outline>
            <Circle height="48px" width="48px" background="white">
              <FacebookIcon color="#1C1C1C" />
            </Circle>
          </Circle>
          <Circle width="64px" height="64px" outline>
            <Circle background="white" height="48px" width="48px">
              <TwitterIcon color="#1C1C1C" />
            </Circle>
          </Circle>
          <Circle width="64px" height="64px" outline>
            <Circle background="white" height="48px" width="48px">
              <InstagramIcon color="#1C1C1C" />
            </Circle>
          </Circle>
        </Column>
        <Column alignItems="flex-end" maxWidth="215px" mr="145px">
          <Row width="183px" justifyContent="space-between">
            <CloudlyIcon />
            <Subtitle
              fontSize="48px"
              lineHeight="56px"
              fontWeight="400"
              width="99px"
              color="white"
            >
              27°
            </Subtitle>
          </Row>
          <Subtitle
            fontSize="20px"
            lineHeight="32px"
            fontWeight="300"
            width="99px"
            color="white"
          >
            Облачно
          </Subtitle>
          <Row width="139px" justifyContent="space-between">
            <LocationIcon />
            <Subtitle
              fontSize="16px"
              lineHeight="24px"
              fontWeight="300"
              width="99px"
              color="white"
            >
              Ялта, Россия
            </Subtitle>
          </Row>
        </Column>
      </Column>
    </Row>
  );
};
