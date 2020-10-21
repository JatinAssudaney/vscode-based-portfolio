import React from "react";
// import "./App.css";
import "./App.prod.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app__container">
      <Header />
      <div className="app">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
