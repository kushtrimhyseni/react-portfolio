import Header from "./components/header/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import { useState } from "react";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Resume from "./components/Resume";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Header menuOpen={isMenuOpen} />
        <div className="w-full">
          <Banner setOpen={setMenuOpen} menuOpen={isMenuOpen} />
          <About />
        </div>
      </div>
      <Skills />
      <Resume />
      <ScrollToTop />
    </>
  );
}

export default App;
