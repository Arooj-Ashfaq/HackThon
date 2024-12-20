import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import YourProfile from "./components/YourProfile";
import Setting from "./components/Setting";
import Notifications from "./components/Notifications";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<YourProfile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notifications" element={<Notifications />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
