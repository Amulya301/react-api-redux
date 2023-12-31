import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" data-testid="fetchdata">
      <Router>
        <Routes>
            <Route path="/todos" element={<FetchData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
