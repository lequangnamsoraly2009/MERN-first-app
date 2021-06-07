import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Landing from './components/Layout/Landing';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
