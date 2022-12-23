import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./pages/Home/Home";
import Grievance from './pages/Grievance/Grievance';

function App() {
  const email = localStorage.getItem("email");
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path='/grievance' element={<Grievance />}/>
          <Route
            path="/Home"
            element={<Home/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// email ? <Home /> : <Navigate to="/" />