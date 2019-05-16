import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Route path='/' exact={true} component={Registration} />
            <Route path='/Registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Dashboard} />
          </div>
     </Router>
    </div>
  );
}

export default App;
