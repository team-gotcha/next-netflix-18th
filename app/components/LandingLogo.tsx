"use client";

import Lottie from "react-lottie-player";
import netflix from "@/public/netflix_landing.json";

const LandingLogo = () => {
  return (
    <Lottie
      animationData={netflix}
      style={{ width: "100%" }}
      play
      loop={false}
    />
  );
};

export default LandingLogo;
