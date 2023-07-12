import React from "react";
import Hero from "./Hero";
import TagsCloud from "../../components/TagsCloud";
import Presentation from "./Presentation";
import Philosophy from "./Philosophy";

const Home = () => {
  return (
    <>
      <Hero />
      <TagsCloud />
      <Presentation />
      <Philosophy />
    </>
  );
};

export default Home;
