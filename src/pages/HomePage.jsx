import React, { useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import ScrollToTop from "../components/ScrollToTop";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={isMenuOpen} />
      <div className="pl-0 lg:pl-[300px]">
        <Banner setOpen={setMenuOpen} menuOpen={isMenuOpen} />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
