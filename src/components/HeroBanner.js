import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "230px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      fontFamily="Rockwell"
      color="#FF2625"
      fontWeight="600"
      fontSize="30px"
    >
      Fitness Club
    </Typography>
    <Typography
      fontWeight={800}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="40px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      color="#a19ea4"
      fontSize="20px"
      fontFamily="Georgia"
      lineHeight="35px"
    >
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "95px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      marginTop="40px"
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
