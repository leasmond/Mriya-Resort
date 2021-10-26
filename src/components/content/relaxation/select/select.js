import {
  Circle,
  Row,
  Subtitle,
} from "../../../../styles/globalStyledComponents";

const Select = ({ index, item }) => {
  return (
    <Row
      key={index}
      justifyContent="space-between"
      height="64px"
      maxWidth={index === 0 ? "326px" : index === 1 ? "264px" : "392px"}
      maxWidthM="calc(100% - 10px)"
      width="100%"
      background="white"
      border="1px solid #E3E3E3"
      m="4px"
    >
      <Subtitle
        fontSize="16px"
        lineHeight="24px"
        fontWeight="300"
        m="20px 0 20px 16px"
        width="100%"
        maxWidth="calc(100% - 8px)"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
      >
        {item.text}
      </Subtitle>
      <Circle
        height="44px"
        minWidth="44px"
        m="10px"
        justifyContent="center"
        background="white"
        cursor="pointer"
        hover
      >
        {item.icon}
      </Circle>
    </Row>
  );
};

export default Select;
