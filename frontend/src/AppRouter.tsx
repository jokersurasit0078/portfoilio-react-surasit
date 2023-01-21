import path from "./constants/path"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Skill from "./pages/skill/Skill";
import Generate from "./pages/generate/Generate";

declare const window: any;

function AppRouter() {
  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const language: any = localStorage.getItem("lang");
    if (language === undefined || language === null) {
      await localStorage.setItem("lang", window.LIST_LANGUAGES[0].value);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.home.url} element={<Home />} />
        <Route path={path.about.url} element={<About />} />
        <Route path={path.contact.url} element={<Contact />} />
        <Route path={path.skill.url} element={<Skill />} />
        <Route path={path.generate.url} element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;