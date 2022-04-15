import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
