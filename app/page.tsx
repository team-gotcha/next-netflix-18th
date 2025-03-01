"use client";
import dynamic from "next/dynamic";

export default function Home() {
  const LandingLogo = dynamic(() => import("./components/LandingLogo"), {
    ssr: false,
  });

  return (
    <div>
      <LandingLogo />
    </div>
  );
}
