import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import Guides from "./Guides";

import BgImg from "../images/footer-tree.svg";
import LinkBtn from "./LinkBtn";
import { ReactComponent as Logo } from "../images/logo.svg";

const Footer = () => {
  return (
    <Box
      position="relative"
      bgcolor="#026670"
      borderRadius="30px"
      mx="30px"
      pt="109px"
      pb="103px"
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
          width: "520px",
          height: "100%",
        },
      }}
    >
      <Container>
        <Stack flexDirection="row" position="relative" zIndex="1">
          <Box maxWidth="380px" mr="118px">
            <Link to="/" style={{ display: "flex" }}>
              <Logo color="#fff" />
            </Link>
            <Typography variant="medium" color="#fff" component="p" mt="20px">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </Typography>
            <Divider
              sx={{ backgroundColor: "rgba(255,255,255,0.3)", my: "32px" }}
            />
            <Stack flexDirection="row">
              <Typography
                width="60px"
                fontSize="16px"
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
                width="60px"
                fontSize="16px"
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
              fontSize="14px"
              color="rgba(191, 190, 187, 0.5)"
              mt="50px"
            >
              ©copyright 2023 RebYakovMoshe.com
            </Typography>
          </Box>

          <Stack alignItems={"flex-start"} rowGap="23px">
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
