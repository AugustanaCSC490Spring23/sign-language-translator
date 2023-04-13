import './App.css';
import NavBar from './Component/NavBar';
import Home from './pages/Home Page/Home';
import Translator from './pages/Translator Page/Translator';
import Login from './pages/Login Page/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./pages/About Page/about";
import Resources from "./pages/Resources Page/Resources";
import SignupPage from "./pages/Signup Page/Signup";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/translator",
      element: <Translator />,
    },
    {
      path: "/my-account",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/resources",
      element: <Resources />
    },
    {
      path: "/resources",
      element: <Resources />
    }
  ]);
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
