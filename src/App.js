import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
