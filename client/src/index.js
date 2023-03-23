import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Component/NavBar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login Page/Login';
import Home from './pages/Home Page/Home';
import Translator from './pages/Translator Page/Translator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/my-account" element={<Login />} />
          <Route path="/translator" element={<Translator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
