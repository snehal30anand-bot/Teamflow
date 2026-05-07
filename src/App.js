import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  return (

    <BrowserRouter>

      <div style={{ padding: "20px" }}>

        <h1>TeamFlow 🚀</h1>

        <nav>

          <Link to="/">Signup</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>

        </nav>

        <hr />

        <Routes>

          <Route path="/" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;