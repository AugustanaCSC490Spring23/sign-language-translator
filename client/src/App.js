import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import About from "./pages/About Page/About";
import FlashcardsCollections from "./pages/FlashcardsCollections Page/FlashcardsCollections";
import Flashcards from "./pages/Flashcards Page/Flashcards";
import Quizzes from "./pages/Quizzes Page/Quizzes";
import QuizDashboard from "./pages/QuizDashboard Page/QuizDashboard";
import TestResult from "./pages/TestResult Page/TestResult";

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
      path: "/flashcards",
      element: <FlashcardsCollections />,
    },
    {
      path: "/flashcards/:slug",
      element: <Flashcards />,
    },
    {
      path: "/quizzes/:id",
      element: <Quizzes />,
    },
    {
      path: "/quizzes",
      element: <QuizDashboard />,
    },
    {
      path: "/quizzes/result/:id",
      element: <TestResult />
    }
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
