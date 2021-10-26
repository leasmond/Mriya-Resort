import {
  DownArrowIcon,
  CalendarIcon,
  HumanIcon,
} from "../../../assets/svg/icons";
import { Button } from "../../../common/components";
import Select from "./select/select";
import { ButtonStyle, H3, Row } from "../../../styles/globalStyledComponents";

const selectedData = [
  { text: "Семейный отдых", icon: <DownArrowIcon /> },
  { text: "пт, 8 мая — вс, 17 мая", icon: <CalendarIcon /> },
  {
    text: "2 взрослых  •  без детей  •  1 номер",
    icon: <HumanIcon />,
  },
];

export const Relaxation = () => {
  return (
    <>
      <H3 id="rest" mt="86px" mb="50px" mtM="47px" mbM="25px">
        Выберите свой отдых
      </H3>
      <Row
        background="#F6F6F6"
        height="80px"
        heightM="auto"
        width="100%"
        alignItems="center"
        borderRadius="8px"
        flexWrap
        mb="42px"
      >
        <Row p="4px" width="100%" flexWrap>
          {selectedData.map((item, index) => (
            <Select index={index} item={item} />
          ))}
        </Row>
        {/* <Button
          height="100%"
          width="100%"
          maxWidth="144px"
          background="black"
          borderRadius="0 8px 8px 0"
        >
          Найти
        </Button> */}
        <ButtonStyle
          maxWidth="144px"
          height="100%"
          minHeight="60px"
          width="100%"
          background="black"
          borderRadius="0 8px 8px 0"
          mM="8px 8px 16px 8px"
        >
          Найти
        </ButtonStyle>
      </Row>
    </>
  );
};
