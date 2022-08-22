import './app.scss';
import Frontend from './Frontend/Frontend';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Backend from './Backend/Backend';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Frontend />} />
          <Route path='admin' element={<Backend />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
