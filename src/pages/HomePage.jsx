import React, { useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import ScrollToTop from "../components/ScrollToTop";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={isMenuOpen} />
      <Banner setOpen={setMenuOpen} menuOpen={isMenuOpen} />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
