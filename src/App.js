import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home/Home';
import Login from './component/Login/index';
import Disclaimer from './component/Disclaimer/index';

function App() {
  return (
    // <div className="App">
    //   <Header />

    //   <Content />

    //   <Footer />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/disclaimer" element={<Disclaimer />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
