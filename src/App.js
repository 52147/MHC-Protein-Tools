import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CollapsibleExample } from "./components/header/CollapsibleExample";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ResearchPage } from "./components/pages/ResearchPage";
import { PublicationPage } from "./components/pages/PublicationPage";
import { ContactPage } from "./components/pages/ContactPage";
function App() {
  return (
    <>
      <Router>
        <CollapsibleExample />
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/research" exact element={<ResearchPage />} />
          <Route path="/publication" exact element={<PublicationPage />} />
          <Route path="/contact" exact element={<ContactPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
