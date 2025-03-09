import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/LandingPage/Home';
import UploadResume from './components/UploadResume/UploadResume';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadresume" element={<UploadResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;