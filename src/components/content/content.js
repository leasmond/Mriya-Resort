import { Column } from "../../styles/globalStyledComponents";
import { Wrapper } from "../../styles/styledComponents";
import { AllInclusive } from "./allInclusive/allInclusive";
import { ComplexInfo } from "./complexInfo/complexInfo";
import { Image } from "./image/image";
import { Main } from "./main/main";
import { Relaxation } from "./relaxation/relaxation";
import { TabsContainer } from "./tabs/tabs";

export const Content = () => {
  return (
    <Wrapper>
      <Image />
      <Column position="relative" mtM="80px">
        <Column minWidth="288px" mM="0" m="23px 116px 0 116px">
          <Main />
          <Relaxation />
          <TabsContainer />
          <ComplexInfo />
        </Column>
        <AllInclusive />
      </Column>
    </Wrapper>
  );
};
