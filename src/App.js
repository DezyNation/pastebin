import './app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Backend from './Backend/Backend';
import Frontend from './Frontend/Frontend';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/pastebin" element={<Frontend />} />
        <Route path="/pastebin/admin" element={<Backend />} />
        <Route path="/admin" element={<Backend />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
