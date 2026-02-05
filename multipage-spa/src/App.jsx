import { Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Header";

function App() {
  return (
    <div className="app-container">

      <Header />

      <h1>Student Portfolio</h1>

      <nav>
        <Link to="/">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
       
      </nav>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;
