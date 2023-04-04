import './App.css';
import LoginPage from "./pages/Login Page/Login";
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
  ]);
  return (
    <div className="App">
      <SignupPage/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;