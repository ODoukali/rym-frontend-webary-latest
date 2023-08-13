import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";
import Rating from "../../components/Rating";

import { ReactComponent as Like } from "../../images/like.svg";

const IconButtonStyled = styled(IconButton)(() => {
  return {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      "& svg": {
        color: "#026670",
      },
    },
  };
});

const TypographyStyled = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "18px",
  color: "#BFBEBB",
  "& span": {
    color: "#333",
  },
});

const DescriptionTab = () => {
  return (
    <>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize="35px"
        mb="20px"
      >
        Course Details
      </Typography>
      <BlockBordered mb="36px">
        <Typography variant="large" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </BlockBordered>
      <TextLink to="">Read More</TextLink>
      <Stack
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        columnGap="20px"
        rowGap="10px"
        mt="40px"
        mb="80px"
      >
        <TypographyStyled>
          Lenght: <span>2 hours 53 minutes</span>
        </TypographyStyled>
        <TypographyStyled>
          Release: <span>30 June 2023</span>
        </TypographyStyled>
        <TypographyStyled>
          Subscribers: <span>257</span>
        </TypographyStyled>
        <TypographyStyled>
          Rating: <Rating defaultValue={4} readOnly sx={{ mx: "8px" }} />{" "}
          <span>28</span>
        </TypographyStyled>
      </Stack>
      <Swiper slidesPerView={2} spaceBetween={20}>
        {[...Array(3).keys()].map((val) => (
          <SwiperSlide key={val}>
            <Box bgcolor="#fff" borderRadius="10px" p="40px">
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
                mb="20px"
              >
                <Typography
                  component="span"
                  fontSize="20px"
                  fontWeight={600}
                  lineHeight="30px"
                  color="secondary"
                >
                  Miro Koljanin
                </Typography>
                <Rating defaultValue={4} readOnly />
              </Stack>
              <BlockBordered mb="11px">
                <Typography variant="medium" component="p" lineHeight="22px">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accu doloremque laudantium, totam rem aperiam, eaque ipsa.
                </Typography>
              </BlockBordered>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextLink to="" sx={{ "& span": { fontSize: "14px" } }}>
                  Read More
                </TextLink>
                <Stack flexDirection="row" alignItems="center" columnGap="15px">
                  <Typography fontSize="14px" fontWeight={600} color="#BFBEBB">
                    Helpful:
                  </Typography>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    columnGap="7px"
                  >
                    <IconButtonStyled sx={{ marginBottom: "4px" }}>
                      <Like color="#BFBEBB" />
                    </IconButtonStyled>
                    <IconButtonStyled
                      sx={{
                        "& svg": { transform: "scale(1, -1)" },
                        marginTop: "4px",
                      }}
                    >
                      <Like color="#BFBEBB" />
                    </IconButtonStyled>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button variant="yellow" sx={{ marginTop: "40px" }}>
        Add Your Comment
      </Button>
    </>
  );
};

export default DescriptionTab;
