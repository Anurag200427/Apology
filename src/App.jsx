import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LetterPage from "./pages/LetterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
