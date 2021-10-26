import React, { useState } from "react";
import { TabPanel } from "react-tabs";
import {
  Row,
  Circle,
  Line,
  STabs,
  STab,
  STabList,
} from "../../../styles/globalStyledComponents";
import "react-tabs/style/react-tabs.css";
import { LeftArrowIcon, RightArrowIcon } from "../../../assets/svg/icons";
import TabPanelCustom from "./tabPanel/tabPanel";

export const TabsContainer = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const nextTabs = () => {
    if (tabIndex < 2) {
      setTabIndex(tabIndex + 1);
    } else setTabIndex(0);
  };

  const backTabs = () => {
    if (tabIndex === 0) {
      setTabIndex(2);
    } else setTabIndex(tabIndex - 1);
  };

  return (
    <Row mb="96px" mbM="56px">
      <STabs
        selectedTabClassName="isSelected"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <STabList>
          <STab>Спецпредложения</STab>
          <STab>Афиша</STab>
          <STab>Категории отдыха</STab>
          <Row displayM="none" position="absolute" top="0" right="0">
            <Circle
              cursor="pointer"
              hover
              width="30px"
              height="30px"
              mr="32px"
              onClick={backTabs}
            >
              <LeftArrowIcon />
            </Circle>
            <Circle cursor="pointer" hover width="30px" height="30px" onClick={nextTabs}>
              <RightArrowIcon />
            </Circle>
          </Row>
        </STabList>
        <Line
          mt="-5px"
          width="100%"
          height="1px"
          mb="32px"
          mbM="0"
          background="#3D3C3C"
          opacity="0.08"
        />
        {[false, false, true].map((item, index) => (
          <TabPanel key={index}>
            <TabPanelCustom variantTwo={item} />
          </TabPanel>
        ))}
      </STabs>
    </Row>
  );
};
