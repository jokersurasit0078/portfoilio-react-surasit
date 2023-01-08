import path from "./constant/path"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import { useEffect } from "react";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Skill from "./page/skill/Skill";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;