import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
