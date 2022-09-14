import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';


const App = () => {
  return (
    <div className="Wrap">
      <Header />

      <main>
        <MainVisual />
      </main>

      <Footer />
    </div>
  )
}
export default App;
