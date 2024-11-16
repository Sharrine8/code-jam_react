import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Events from "./Events";
import Footer from "./Footer";
import "../blocks/App.css";
import AboutUs from "./AboutUs";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
