import {
  Row,
  Column,
  Circle,
  Subtitle,
} from "../../../../styles/globalStyledComponents";

const Special = ({ item, variantTwo }) => {
  return (
    <Row
      position="relative"
      maxWidth="360px"
      width="100%"
      height="232px"
      borderRadius="8px"
      alignItems="flex-end"
      backgroundImage={item.image}
      backgroundPosition="center"
      overflow="hidden"
      // mr="40px"
    >
      {variantTwo ? (
        <Circle
          background="rgba(0, 0, 0, 0.56)"
          width="100%"
          height="72px"
          pl="24px"
          justifyContent="flex-start"
          borderRadius="26% 101%/ 9% 72% 0% 0%"
        >
          <Subtitle
            fontSize="24px"
            lineHeight="32px"
            fontWeight="300"
            color="white"
            textTransform="initial"
          >
            {item.title}
          </Subtitle>
        </Circle>
      ) : (
        <Circle
          background="rgba(0, 0, 0, 0.56)"
          width="219px"
          height="168px"
          alignItems="flex-start"
          borderRadius="0 220px 0 0 / 0 168px 0 0"
        >
          <Column mt="47px" ml="24px">
            <Subtitle
              fontSize="24px"
              lineHeight="32px"
              fontWeight="600"
              color="white"
              mb="8px"
            >
              {item.percent}
            </Subtitle>
            <Subtitle
              fontSize="24px"
              lineHeight="32px"
              fontWeight="300"
              color="white"
              textTransform="initial"
            >
              {item.title}
            </Subtitle>
          </Column>
        </Circle>
      )}
    </Row>
  );
};

export default Special;
