import {BrowserRouter as Router, Route} from "react-router-dom";
import FrontPage from "./components/FrontPage";
import AboutPage from "./components/AboutPage";
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={FrontPage}/>
          <Route path="/About" component={AboutPage}/>
      </Router>
    </div>
  );
}

export default App;
