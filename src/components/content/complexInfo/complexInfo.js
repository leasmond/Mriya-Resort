import { AbsractionIcon, WavesIcon } from "../../../assets/svg/icons";
import { Button } from "../../../common/components";
import { Column, H3, Subtitle } from "../../../styles/globalStyledComponents";

export const ComplexInfo = () => {
  return (
    <Column alignItems="center">
      <WavesIcon />
      <H3 textAlign="center" mt="78px" mb="42px" mtM="63px" mbM="25px">
        <span style={{ fontWeight: 400 }}>Mriya Resort & SPA — </span>
        <br />
        больше чем просто отдых
      </H3>
      <AbsractionIcon width="37px" height="24" />
      <Subtitle
        fontFamily="SangBleu Kingdom"
        fontSize="18px"
        lineHeight="32px"
        maxWidth="640px"
        width="100%"
        textAlign="center"
        mt="42px"
        mtM="26px"
        mb="38px"
      >
        В окружении необычного природного ландшафта курорт становится
        по-настоящему уникальным. Это место идеально для тех, кто больше гор
        любит только море.
      </Subtitle>
      <Button outline mb="96px" mbM="120px">
        О комплексе
      </Button>
    </Column>
  );
};
