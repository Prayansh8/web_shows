import './App.css';
import ShowDetails from "./component/ShowDetails";
import ShowList from "./component/ShowList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/summary/:showId" element={<ShowDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
