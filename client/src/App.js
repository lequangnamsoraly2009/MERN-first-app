import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Landing from './components/Layout/Landing';
import Auth from './features/Auth/pages/Auth';
import Home from './features/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" render={props => <Auth {...props} authRoute="login" />} />
        <Route exact path="/register" render={props => <Auth {...props} authRoute="register" />} />
        <Route path="/home" component={Home}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
