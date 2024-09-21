import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "../src/components/firstPage";
import ProjectPage from "./components/projectPage";
import ProjectDetails from "./components/projectDetails";
import "./App.css";
import Loader from "./components/loader";

import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch(); //new

  const getPortfolioData = async () => {
    //new
    try {
      dispatch(ShowLoading(true));
      const response = await axios.get(
        "https://portfolio-v-2-backend.vercel.app/api/portofolio/get-portofolio-data"
      );
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading(true));
    } catch (error) {
      dispatch(HideLoading(true));
      console.log(error);
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <Router>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projectsDetail/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
