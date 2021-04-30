import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import FrontPage from "./components/FrontPage";
import AboutPage from "./components/AboutPage";
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Route path="/" component={FrontPage}/>
          <Route path="/About" component={AboutPage}/>
      </Router>
    </div>
  );
}

export default App;
