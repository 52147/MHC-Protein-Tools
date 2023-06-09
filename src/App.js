import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CollapsibleExample} from "./components/header/CollapsibleExample";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Router>
      <CollapsibleExample/>
      <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
