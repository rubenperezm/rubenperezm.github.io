import React, { useState, Suspense, lazy } from "react";
import { NavigationBar } from "./components";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const AboutMe = lazy(() => import("./pages/AboutMe/AboutMe"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "aboutMe":
        return <AboutMe />;
      case "achievements":
        return <Achievements />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App" style={{backgroundColor: "#efefef", minHeight: "100vh"}}>
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loader()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
