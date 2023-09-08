// src/components/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../component/Home/Home';
import Disclaimer from '../component/Disclaimer/index';


function AppRouter() {
  return (
    <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/disclaimer" component={Disclaimer} />
    </Routes>
  );
}

export default AppRouter;
