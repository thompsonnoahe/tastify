import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import RecipeDetail from './components/recipe/RecipeDetail';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Profile from './components/auth/Profile';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipe/:id' component={RecipeDetail} />
            <Route path={`/profile/${user?.nickname}`} component={Profile} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default withAuth0(App);
