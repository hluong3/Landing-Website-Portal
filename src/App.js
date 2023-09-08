import logo from './logo.svg';
import './App.scss';

import Button from '@mui/material/Button';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import Content from './component/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
