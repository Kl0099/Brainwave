import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collabration from "../components/Collabration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import RoadMap from "../components/RoadMap";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Benefits />
      <Collabration />
      <Services />
      <Pricing />
      <RoadMap />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
