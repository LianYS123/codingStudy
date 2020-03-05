import React from 'react';
import {Router,Route} from 'react-router-dom'
import Home from './views/Home'
import Search from './views/Search';
function App() {
  return (
    <Router>
      <Route path='/' component={Home}>
        
      </Route>
    </Router>
  );
}

export default App;
