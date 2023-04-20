import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./pages/Home Page/Home";
import Translator from "./pages/Translator Page/Translator";
import Login from "./pages/Login Page/Login";
import Signup from "./pages/Signup Page/Signup";
import {
  createBrowserRouter,
  RouterProvider,
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
  ]);
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
