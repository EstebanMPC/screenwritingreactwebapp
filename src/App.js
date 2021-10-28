import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignInComponent.js';
import SignUp from './components/SignUpComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
