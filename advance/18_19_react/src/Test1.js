import React, { Component } from 'react';
import Comp1 from './components/test1/Comp1';
import PureComp from './components/test1/PureComp';
import Hoc from './components/test1/Hoc';
import Composition from './components/test1/Composition';
import RadioTest from './components/test1/RadioTest';



export default class extends Component {
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
