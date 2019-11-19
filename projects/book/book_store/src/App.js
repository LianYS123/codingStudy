import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import Test from './Test'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path={'/home'} component={Home}></Route>
          <Route exact path={'/news'} component={News}></Route>
          <Route exact path={'/about'} component={About}></Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
