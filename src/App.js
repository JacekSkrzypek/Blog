import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewPost from "./Pages/NewPost";
import Contents from "./Pages/Contents";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
