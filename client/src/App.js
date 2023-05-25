import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import NavBar from "./Component/NavBar";
import Home from "./pages/Home Page/Home";
import Translator from "./pages/Translator Page/Translator";
import Login from "./pages/Login Page/Login";
import Signup from "./pages/Signup Page/Signup";
import Learning from "./pages/Learning Page/Learning";
import Dictionary from "./pages/Dictionary Page/Dictionary";
import Lessons from "./pages/Lessons Page/Lessons";
import Words from "./pages/Words Page/Words";
import WordDetails from "./pages/Word Details Page/WordDetails";
import Profile from "./pages/Profile Page/Profile";
import Resources from "./pages/Resources Page/Resources";
import About from "./pages/About Page/about-us ";
import Flashcards from "./pages/Flashcards Page/Flashcards";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/learning",
      element: <Learning />,
    },
    {
      path: "/learning/dictionary",
      element: <Dictionary />,
    },
    {
      path: "/learning/dictionary/:letter",
      element: <Words />,
    },
    {
      path: "/learning/lessons/:topic",
      element: <Words />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/learning/dictionary/:letter/:text",
      element: <WordDetails />,
    },
    {
      path: "/learning/lessons",
      element: <Lessons />,
    },
    {
      path: "/me",
      element: <Profile />,
    },    
    {
      path: "/flashcards/:slug",
      element: <Flashcards />,
    },
    {
      path: "/Flashcards",
      element: <Flashcards />,
    },

  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
