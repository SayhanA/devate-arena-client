import ClientSection from "@/components/molicules/ClientsSection";
import FeatureDebates from "@/components/molicules/FeatureDebates";
import HomeHero from "@/components/molicules/HomeHero";
import StatsSection from "@/components/molicules/StatsSection";
import React from "react";

const Home = () => {
  return <>
   <HomeHero />
   <StatsSection />
   <FeatureDebates />
   <ClientSection />
  </>;
};

export default Home;
