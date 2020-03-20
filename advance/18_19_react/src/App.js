import React, { Component } from 'react';
import Comp1 from './components/Comp1';
import PureComp from './components/PureComp';
import Hoc from './components/Hoc';
import Composition from './components/Composition';
import RadioTest from './components/RadioTest';
import './App.css';



class App extends Component {
  state = {
    user: { name: 'lian', pass: '123' }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        user: { name: 'lian', pass: '123' }
      })
    }, 1000);
  }
  render() {

    return (
      <div>
        <Comp1></Comp1>
        <hr />
        <PureComp {...this.state.user}></PureComp>
        <hr />
        <Hoc other="other">hoc</Hoc>
        <hr />
        <Composition>
          <p>hello</p>
          <div>world</div>
        </Composition>
        <hr/>
        <RadioTest/>
      </div>
    )
  }
}

export default App;
