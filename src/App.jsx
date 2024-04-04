import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collabration from "./components/Collabration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";
import Home from "./Pages/Home";
import Test from "./test";
function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/pricing"
            element={<Test />}
          ></Route>
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
