import Header from "./components/header/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import { useState } from "react";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Resume from "./components/Resume";
import ContactForm from "./components/pages/ContactForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header menuOpen={isMenuOpen} />
                <Banner setOpen={setMenuOpen} menuOpen={isMenuOpen} />
                <About />
                <Skills />
                <Resume />
                <ScrollToTop />
              </>
            }
          ></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
