import './App.css';
import Login from './pages/Login Page/Login';
import Signup from "./pages/Signup Page/Signup"
import Home from './pages/Home Page/Home';
import Translator from './pages/Translator Page/Translator';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/translator" element={<Translator/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;