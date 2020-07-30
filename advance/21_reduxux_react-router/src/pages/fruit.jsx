import React, { Component } from "react";
import { connect } from "react-redux";
import { add, minus, setFruit } from "../store/fruit";
class Fruit extends Component {
  state = {
    newFruit: "",
  };
  onChange = (ev) => {
    this.setState({ newFruit: ev.target.value });
  };
  render() {
    const { newFruit } = this.state;
    const { setFruit, fruit, count, add, minus } = this.props;
    return (
      <div>
        <header>
          <input type="text" onChange={this.onChange} /> <br />
          <button onClick={() => setFruit(newFruit)}>setFruit</button>
        </header>
        <main>
          <p>
            fruit: {fruit} count:{count} <button onClick={add}>+</button>{" "}
            <button onClick={minus}>-</button>
          </p>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  fruit: state.fruit.name,
  count: state.fruit.count,
});
export default connect(mapStateToProps, { setFruit, add, minus })(Fruit);
