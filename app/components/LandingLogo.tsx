"use client";

import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import netflix from "@/public/netflix_landing.json";

const LandingLogo = () => {
  const router = useRouter();
  return (
    <Lottie
      animationData={netflix}
      style={{ width: "100%" }}
      play
      loop={false}
      onComplete={() => router.push("/main")}
    />
  );
};

export default LandingLogo;
