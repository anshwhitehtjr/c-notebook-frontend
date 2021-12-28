import { useState } from "react";
import Alert from "./AppComponents/Alert";
import Navbar from "./AppComponents/Navbar";
import Home from "./Components/Home";
import Footer from "./AppComponents/Footer";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {
  const [alert, setAlert] = useState(null);
  const mode = 'indigo';

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar mode={ mode } title='Demo Title' />
      <Alert alert={ alert } />
      <Switch>
        <Route exact path='/'>
          <Home showAlert={ showAlert } />
        </Route>
        <Route exact path='/about'>
          <About showAlert={ showAlert } />
        </Route>
      </Switch>
      <Footer mode={ mode } />
    </Router>
  );
}

export default App;
