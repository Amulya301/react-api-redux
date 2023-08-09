import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App" data-testid='fetchdata'>
      <Provider store={store}>
        <Router>
        <Routes>
            <Route path="/todos" element={<FetchData />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
