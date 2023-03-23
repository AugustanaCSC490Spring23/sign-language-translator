import './App.css';
import React from 'react';
import Translator from './pages/Translator Page/Translator';
import {Routes,BrowserRouter, Route, useNavigate} from "react-router-dom";

function App() {
 
 
  return (
    <div className="App">
      <header className="App-header">
        Hi team Oriole
        
      </header>
      {/* <div> */}
        {/* <BrowserRouter>
          <Routes> 
            <Route path ="/Translator" element={<Translator />} />
          

          </Routes>
        </BrowserRouter> */} 
        

         {/* <button onClick={()=>navigate("/pages/Translator Page/Translator")}> Translator </button> */}

       {/* </div>  */}
      
    </div>
  );
}

export default App;
