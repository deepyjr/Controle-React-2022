import React from "react";
import Layout from "../Layout";
import "./HomePage.css";
import PageCSS from "../PageCSS/PageCss";
import PageCSSClass from "../PageCSSClass/PageCssClass";
import PageFramework from "../PageFramework/PageFramework";
import PageLibReact from "../PageLibReact/PageLibReact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <Router>
      <Layout />
        <Routes >
              <Route exact path="/PageCSS" element={<PageCSS/>} />
              <Route exact path="/PageCSSClass" element={<PageCSSClass/>} />
              <Route exact path="/PageFrameWork" element={<PageFramework/>} />
              <Route exact path="/PageLibReact" element={<PageLibReact/>} />
        </Routes >
      </Router>
    </>
  );
}

export default HomePage;
