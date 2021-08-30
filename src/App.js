import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import RecipeDetail from './components/recipe/RecipeDetail';
import Footer from './components/global/Footer';
import Header from './components/global/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipe/:id' component={RecipeDetail} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
