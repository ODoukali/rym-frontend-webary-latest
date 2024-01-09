import { Box, Button, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";
import PurchaseTable from "./PurchaseTable";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as FilterMenu } from "../../images/filter-menu.svg";
import { ReactComponent as Arrows } from "../../images/down-arrow.svg";

const PurchaseHistory = () => {
  return (
    <>
      <BlockHeading>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          flexWrap="wrap"
        >
          <Box>
            <Typography component="h3" variant="blockTitle" mb="5px">
              Transactions & Subscriptions
            </Typography>
            <Typography component="p" variant="medium">
              View your transactions and manage your subscriptions.
            </Typography>
          </Box>

          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent={{ xs: "space-between", ssm: "flex-end" }}
            gap={{ xs: "15px", ssm: "30px" }}
          >
            <Button
              startIcon={<FilterMenu />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)" },
                },
              }}
            >
              Active
            </Button>

            <Button
              startIcon={<Arrows />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)" },
                },
              }}
            >
              Date Subscribed
            </Button>
          </Stack>
        </Stack>
      </BlockHeading>

      <PurchaseTable />
    </>
  );
};

export default PurchaseHistory;
