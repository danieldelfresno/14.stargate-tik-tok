import React from 'react';
import ReactDOM  from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Upload from './pages/Upload'
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);