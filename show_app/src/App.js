import logo from './logo.svg';
import './App.css';

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
