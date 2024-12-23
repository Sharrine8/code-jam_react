import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Events from "./Events";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import MyEvent from "./MyEvent";
import "../blocks/App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-event" element={<MyEvent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
