import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      s
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    alignItems: "flex-end",
    gap: "2px",
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    flex: 1,
    minHeight: 64,
    textTransform: "none",
    fontWeight: 600,
    fontSize: 14,
    color: "primary",
    backgroundColor: "#E6E5E1",
    borderRadius: "10px 10px 0 0",
    "&.Mui-selected, &:hover": {
      minHeight: 74,
      color: "#FCE181",
      fontSize: 16,
      backgroundColor: "#026670",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
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
      width="100%"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          top: "72px",
          left: 0,
          height: "2px",
          width: "100%",
          backgroundColor: "#026670",
          zIndex: 1,
        },
      }}
    >
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Description" />
        <StyledTab label="Subscription" />
        <StyledTab label="Notes & Bookmarks" />
        <StyledTab label="Connect" />
        <StyledTab label="Resources" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
  );
};

export default CourseTabs;
