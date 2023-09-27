import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import ResourcesTab from "./ResourcesTab";
import NotesBookmarksTab from "./NotesBookmarksTab";
import ConnectTab from "./ConnectTab";
import SubscriptionTab from "./SubscriptionTab";
import OverviewTab from "./OverviewTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: pxToRem(50) }}>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    alignItems: "flex-end",
    gap: pxToRem(2),
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: pxToRem(40),
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    flex: 1,
    height: "57px",
    minHeight: pxToRem(64),
    textTransform: "none",
    fontWeight: 600,
    fontSize: pxToRem(14),
    color: "primary",
    backgroundColor: "#E6E5E1",
    borderRadius: `${pxToRem(10)} ${pxToRem(10)} 0 0`,
    "&:hover": {
      backgroundColor: "#D9D8D4",
    },
    "&.Mui-selected": {
      color: "#FCE181",
      fontSize: pxToRem(16),
      backgroundColor: "#026670",
    },
  })
);

const CourseTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      position="relative"
      width={`calc(93.5% - ${pxToRem(300)})`}
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          top: pxToRem(62),
          left: 0,
          height: pxToRem(2),
          width: "100%",
          backgroundColor: "#026670",
          zIndex: 1,
        },
      }}
    >
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Overview" />
        <StyledTab label="Subscription" />
        <StyledTab label="Notes & Bookmarks" />
        <StyledTab label="Connect" />
        <StyledTab label="Resources" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <OverviewTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubscriptionTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NotesBookmarksTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ConnectTab />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ResourcesTab />
      </TabPanel>
    </Box>
  );
};

export default CourseTabs;
