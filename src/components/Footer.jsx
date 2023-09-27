import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import Guides from "./Guides";
import LinkBtn from "./LinkBtn";

import BgImg from "../images/footer-tree.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

const Footer = () => {
  return (
    <Box
      position="relative"
      bgcolor="#026670"
      borderRadius={pxToRem(30)}
      pt={pxToRem(109)}
      pb={pxToRem(103)}
      overflow="hidden"
      sx={{
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: "78%",
          transform: "translateX(-50%)",
          background: `url(${BgImg}) center no-repeat`,
          backgroundSize: "100%",
          width: pxToRem(520),
          height: "100%",
        },
      }}
    >
      <Container disableGutters>
        <Stack flexDirection="row" position="relative" zIndex="1">
          <Box maxWidth={pxToRem(380)} mr={pxToRem(118)}>
            <Link to="/" style={{ display: "flex" }}>
              <Logo color="#fff" />
            </Link>
            <Typography
              variant="medium"
              color="#fff"
              component="p"
              mt={pxToRem(20)}
            >
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </Typography>
            <Divider
              sx={{ backgroundColor: "rgba(255,255,255,0.3)", my: pxToRem(32) }}
            />
            <Stack flexDirection="row">
              <Typography
                width={pxToRem(60)}
                fontSize={pxToRem(16)}
                fontWeight="500"
                color="#BFBEBB"
              >
                Phone:
              </Typography>
              <MuiLink
                underline="hover"
                href="tel:2126665433"
                color="#fff"
                fontWeight={700}
              >
                212 666 5433
              </MuiLink>
            </Stack>
            <Stack flexDirection="row">
              <Typography
                width={pxToRem(60)}
                fontSize={pxToRem(16)}
                fontWeight="500"
                color="#BFBEBB"
              >
                Email:
              </Typography>
              <MuiLink
                underline="hover"
                href="mailTo:mosesganz@gmail.com"
                color="#FCE181"
                fontWeight={700}
              >
                mosesganz@gmail.com
              </MuiLink>
            </Stack>
            <Typography
              fontSize={pxToRem(14)}
              color="rgba(191, 190, 187, 0.5)"
              mt={pxToRem(50)}
            >
              ©copyright 2023 RebYakovMoshe.com
            </Typography>
          </Box>

          <Stack alignItems={"flex-start"} rowGap={pxToRem(23)}>
            <LinkBtn to="/" title="Main" footerLink />
            <LinkBtn to="/philosophy" title="Philosophy" footerLink />
            <LinkBtn to="/blog" title="Blog" footerLink />
            <LinkBtn to="/parsha" title="Parsha" footerLink />
            <LinkBtn to="/qa" title="Q&A" footerLink />
            <LinkBtn to="/contact" title="Contact" footerLink />
            <LinkBtn to="/legal" title="Legal" footerLink />
          </Stack>
        </Stack>
        <Guides color="rgba(0,0,0,0.1)" />
      </Container>
    </Box>
  );
};

export default Footer;
