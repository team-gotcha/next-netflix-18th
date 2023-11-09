import dynamic from "next/dynamic";

const page = () => {
  const LandingLogo = dynamic(() => import("./components/LandingLogo"), {
    ssr: false,
  });

  return (
    <div>
      <LandingLogo />
    </div>
  );
};

export default page;
