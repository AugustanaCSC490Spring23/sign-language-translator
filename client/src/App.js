import "./App.css";

import NavBar from "./Component/NavBar";
import Home from "./pages/Home Page/Home";
import Translator from "./pages/Translator Page/Translator";
import Login from "./pages/Login Page/Login";
import Learning from "./pages/Learning Page/Learning";
import Dictionary from "./pages/Dictionary Page/Dictionary";
import Lessons from "./pages/Lessons Page/Lessons";
import Words from "./pages/Words Page/Words";
import WordDetails from "./pages/Word Details Page/WordDetails";
import About from "./pages/About Page/About";
import Resources from "./pages/Resources Page/Resources";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      path: "/learning",
      element: <Learning />,
    },
    {
      path: "/learning/dictionary",
      element: <Dictionary />
    },
    {
      path: "/learning/dictionary/:letter",
      element: <Words />
    },
    {
      path: "/learning/dictionary/:letter/:text",
      element: <WordDetails />
    },
    {
      path: "/learning/lessons",
      element: <Lessons />
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
