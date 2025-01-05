import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Elibrary from "./components/Elibrary";
import OnlineModules from "./components/OnlineModules";
import Lessons from "./components/Lessons";
import Faculty from "./components/Faculty";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/e-library' element={<Elibrary />} />
        <Route path='/online-modules' element={<OnlineModules />} />
        <Route path='/lessons' element={<Lessons />} />
        <Route path='/faculty' element={<Faculty />} />

        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
      </Routes>
      
    </>
  );
}

export default App;
