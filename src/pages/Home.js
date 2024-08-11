import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
