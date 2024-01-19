import {
  Dialog,
  useTheme,
  useMediaQuery,
  Typography,
  Stack,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "../../components/IconBtnCircular";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

import { ReactComponent as Close } from "../../images/close.svg";

const TypographyStyled = styled(Typography)({
  fontSize: "12px",
  fontWeight: 600,
  color: "#BFBEBB",
});

const Hr = styled(Divider)({
  fontSize: "14px",
  fontWeight: 600,
  color: "#BFBEBB",
  margin: "30px 0",
  "&::after, &::before": {
    borderTop: "1px solid #BFBEBB",
  },
  "& span": {
    padding: "0 18px",
  },
});

const PreviewModal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { openSubscriptionModal, ...restProps } = props;

  return (
    <Dialog
      {...restProps}
      fullScreen={fullScreen}
      maxWidth="xs"
      scroll="body"
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          return;
        }
      }}
      sx={{
        "& .MuiPaper-root": {
          maxWidth: 1060,
          borderRadius: fullScreen ? 0 : pxToRem(20),
          verticalAlign: "center",
          backgroundColor: "#F7F6F2",
        },
        zIndex: 1500,
      }}
    >
      <Stack flexDirection={{ xs: "column-reverse", sm: "row" }}>
        <Stack
          width={{ xs: "100%", sm: 300 }}
          bgcolor="#EDECE8"
          textAlign="center"
          p={{ xs: "30px 25px", ssm: "40px 60px" }}
        >
          <Button
            onClick={() => openSubscriptionModal(350, "subscribe")}
            fullWidth
            variant="yellow"
            fontSize="14px"
            sx={{ height: "54px", mb: "15px" }}
          >
            Subscribe: $350
          </Button>
          <TypographyStyled component="p">Valid for 6 months</TypographyStyled>
          <Hr>or</Hr>
          <Button
            onClick={() => openSubscriptionModal(475, "buy")}
            fullWidth
            variant="outlined"
            fontSize="14px"
            sx={{
              height: "54px",
              mb: "15px",
              borderWidth: "2px",
              "&:hover": { borderWidth: "2px" },
            }}
          >
            Buy: $475
          </Button>
          <TypographyStyled component="p" mb="20px">
            Lifetime access *
          </TypographyStyled>
          <TypographyStyled component="p" textAlign="left" mt="auto">
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </TypographyStyled>
        </Stack>

        <Box flex={1} p={{ xs: "30px 25px", ssm: "40px 60px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            gap="30px"
          >
            <Typography
              fontSize="30px"
              lineHeight="30px"
              fontWeight="900"
              fontFamily="PloniBold"
              letterSpacing="-0.44px"
              textAlign="right"
            >
              וואס טוט מען ווען דער מאן ארבעט צופרי
            </Typography>
            <IconBtnCircular onClick={() => props.onClose()}>
              <Close color="#026670" />
            </IconBtnCircular>
          </Stack>
          <Typography
            variant="medium"
            component="p"
            textAlign="right"
            m="20px 0 60px"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </Typography>
          <VideoPlayer />
        </Box>
      </Stack>
    </Dialog>
  );
};

export default PreviewModal;
