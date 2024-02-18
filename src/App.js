import "./App.css";
import LoginForm from "./components/Login";
import SignupForm from "./components/Signup";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
