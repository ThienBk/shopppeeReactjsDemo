import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Contact from "../content/contact/contact";
import Footter from "../content/footer/footter";
import Home from "../content/home/home";
import News from "../content/news/news";
import Header from "../Header/Header";

export default function Nav() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footter/>
    </div>
  );
}
