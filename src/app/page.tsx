"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("@/components/HomeContent"), {
  ssr: false,
});

const Home = () => {
  return <HomeContent />;
};

export default Home;
