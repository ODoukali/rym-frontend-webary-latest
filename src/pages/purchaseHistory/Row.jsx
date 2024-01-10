import { useState } from "react";
import {
  Button,
  Collapse,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactComponent as Chevron } from "../../images/chevron.svg";

const StatusStyled = styled(Box)({
  width: "110px",
  borderRadius: "32px",
  border: "2px solid",
  fontSize: "14px",
  fontWeight: 600,
  textAlign: "center",
  marginLeft: "auto",
});

const TypographySlyled = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",
  fontWeight: 500,
});

const Row = (props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Status = (props) => {
    const statusClassName =
      props.status === "Inactive"
        ? "status-inactive"
        : props.status === "Active"
        ? "status-active"
        : props.status === "Pending"
        ? "status-pending"
        : props.status === "Subscription"
        ? "status-subscription"
        : "";

    return (
      <StatusStyled className={statusClassName}>{props.children}</StatusStyled>
    );
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          align="left"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            pl: 0,
            pr: { xs: 0, sm: "16px" },
            borderBottom: {
              xs: "unset",
              sm: "1px solid rgba(224, 224, 224, 1)",
            },
            pb: { xs: 0, sm: "16px" },
          }}
        >
          {props.course}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            verticalAlign: "baseline",
            borderBottom: {
              xs: "unset",
              sm: "1px solid rgba(224, 224, 224, 1)",
            },
            display: { xs: "none", sm: "table-cell" },
          }}
        >
          {props.date}
        </TableCell>
        <TableCell
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            verticalAlign: "baseline",
            borderBottom: {
              xs: "unset",
              sm: "1px solid rgba(224, 224, 224, 1)",
            },
            pb: { xs: 0, sm: "16px" },
            px: { xs: 0, sm: "16px" },
            textAlign: { xs: "right", sm: "center" },
          }}
        >
          {props.price}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            verticalAlign: "baseline",
            display: { xs: "none", sm: "table-cell" },
          }}
        >
          {props.discount}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            verticalAlign: "baseline",
            display: { xs: "none", sm: "table-cell" },
          }}
        >
          {props.expiration}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            verticalAlign: "baseline",
            display: { xs: "none", sm: "table-cell" },
          }}
        >
          <Status status={props.status}>{props.status}</Status>
        </TableCell>
        <TableCell
          align="right"
          sx={{
            verticalAlign: "baseline",
            display: { xs: "none", sm: "table-cell" },
            pr: 0,
          }}
        >
          <Button sx={{ fontSize: "12px", fontWeight: 600 }}>
            View Details
          </Button>
        </TableCell>
        <TableCell
          align="right"
          sx={{
            display: { xs: "table-cell", sm: "none" },
            minWidth: "32px",
            verticalAlign: "baseline",
            borderBottom: {
              xs: "none",
              sm: "1px solid rgba(224, 224, 224, 1)",
            },
            pb: { xs: 0, sm: "16px" },
            px: 0,
          }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              "& svg": {
                transform: open
                  ? "rotate(-90deg) translateX(2px)"
                  : "rotate(90deg) translateX(-2px)",
              },
            }}
          >
            <Chevron color="#333" />
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow sx={{ display: { xs: "table-row", sm: "none" } }}>
        <TableCell
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#BFBEBB",
            pt: "5px",
            pl: 0,
            display: open ? "none" : "table-cell",
            borderBottom: "unset",
          }}
        >
          {props.date}
        </TableCell>
        <TableCell
          colSpan={open ? 3 : 0}
          sx={{
            pt: "5px",
            pl: open ? 0 : "16px",
            px: 0,
            borderBottom: "unset",
            "& div": {
              ml: open ? "initial" : "auto",
            },
          }}
        >
          <Status status={props.status}>{props.status}</Status>
        </TableCell>
        <TableCell
          sx={{ display: open ? "none" : "table-cell", borderBottom: "unset" }}
        ></TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          padding="none"
          colSpan={2}
          sx={{
            borderBottom: {
              xs: "1px solid rgba(224, 224, 224, 1)",
              sm: "unset",
            },
          }}
        >
          <Collapse in={open && mobile} timeout="auto" unmountOnExit>
            <Stack gap="5px">
              <TypographySlyled component="p">
                <span>Subscribed:</span>
                <span>{props.date}</span>
              </TypographySlyled>
              <TypographySlyled component="p">
                <span>Expires:</span>
                <span>{props.expiration}</span>
              </TypographySlyled>
              <TypographySlyled component="p" sx={{ fontWeight: 600 }}>
                <span>Paid:</span>
                <span>{props.price}</span>
              </TypographySlyled>
              <TypographySlyled component="p" sx={{ fontWeight: 600 }}>
                <span>Discount:</span>
                <span>-{props.discount}</span>
              </TypographySlyled>
            </Stack>
            <Button sx={{ fontSize: "12px", mt: "10px", mb: "20px" }}>
              View Details
            </Button>
          </Collapse>
        </TableCell>
        <TableCell
          padding="none"
          sx={{
            borderBottom: {
              xs: "1px solid rgba(224, 224, 224, 1)",
              sm: "unset",
            },
          }}
        ></TableCell>
      </TableRow>
    </>
  );
};

export default Row;
