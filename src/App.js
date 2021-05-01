import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FrontPage from "./components/FrontPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Page404 from "./components/Page404";
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={FrontPage} exact/>
          <Route path="/About" component={AboutPage}/>
          <Route path="/Contact" component={ContactPage}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
