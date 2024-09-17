import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "../src/components/firstPage";
import ProjectPage from "./components/projectPage";
import ProjectDetails from "./components/projectDetails";
import './App.css';
import Loader from "./components/loader";

import { useState } from "react";

function App() {
  const [showLoading,setShowLoading] = useState(false);
  return (
    <Router>
      {showLoading? <Loader/> : null}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projectsDetail/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
