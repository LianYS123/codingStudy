import React,{Component} from 'react';
import View from "./pages/View"
import {BrowserRouter as Router} from "react-router-dom"

class App extends Component{
  constructor(...args){
    super(...args)
  }
  render(){
    return (
      <Router>
        <View></View>
      </Router>
    )
  }
}

export default App
