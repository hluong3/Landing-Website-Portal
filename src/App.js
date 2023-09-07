import logo from "./logo.svg";
import "./App.css";

import Button from "@mui/material/Button";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import Content from "./component/Content/Content";

import { Route, Routes } from "react-router-dom";
import Disclaimer from "./component/Disclaimer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Content} />
        <Route path="/disclaimer" Component={Disclaimer} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
