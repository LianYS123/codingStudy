import React, {useState, useEffect, useReducer, memo,useContext} from 'react';
import {Input} from 'antd';
import FruitReducer from './store';

const Context = React.createContext();
function ShowFurits(props) {
  let fruits = props.fruits || [];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => <li key={index} onClick={() => {
          props.onChange(fruit)
        }}>
          {fruit.id}
          | {fruit.name}
          | ￥{fruit.price}
        </li>)}
      </ul>
    </div>
  )
}
const TestComp = memo(function (){
  console.log(111)
  return (
    <div>
      test
    </div>
  )
})
const FruitAdd = memo(function FruitAdd() {
  const [fruit,
    setFruit] = useState(null);
  //这里存在一些问题：fruits不总是能拿到最新的数据，只能拿到通过当前组件改变的数据
  // const [fruits,
  //   dispatch] = useReducer(FruitReducer);   
  // console.log(fruits);

  //通过上下文获取可以解决这个问题，拿到的fruits总是最新的
  const {dispatch,fruits} = useContext(Context)
  console.log(fruits)

  const onAddFruit = e => {
    let value = e.target.value;
    if (e.key === "Enter" && value) {
      dispatch({
        type: 'add',
        payload: 
          {
            name: fruit,
            price: 0,
            id: 0
          }
      });
      setFruit('');
    }
  }
  return (
    <div>
      <Input
        placeholder="水果名称"
        onKeyDown={e => {
        onAddFruit(e)
      }}
        value={fruit}
        onChange={e => setFruit(e.target.value)}/>
      cur:{fruit}
    </div>
  )
})
function HookTest1() {
  const [fruit,
    setFruit] = useState(null);
  const [count,
    setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [count]);

  const [fruits,
    setFruits] = useState([
    {
      id: 1,
      name: '香蕉',
      price: 18
    }, {
      id: 2,
      name: '苹果',
      price: 28
    }, {
      id: 3,
      name: '菠萝',
      price: 38
    }
  ]);

  useEffect(function () {
    document.title = fruit
      ? fruit.name
      : 'fruit'
  }, [fruit])

  return (
    <div>
      count:{count}
      <br/>
      当前选择：{fruit && fruit.name}
      <FruitAdd
        onAddFruit={fruit => setFruits([
        ...fruits, {
          name: fruit,
          id: 0,
          price: 0
        }
      ])}/>
      <ShowFurits onChange={setFruit} fruits={fruits}/>

    </div>
  )
}

function HookTest2() {
  const [fruit,
    setFruit] = useState(null);
  //得到状态和改变状态的函数,只能在React函数中调用，不能在useEffect或自定义函数中用
  const [fruits,
    dispatch] = useReducer(FruitReducer);
    console.log(fruits);
  useEffect(() => {
    dispatch({
      type: 'init',
      payload: [
        {
          id: 1,
          name: '香蕉',
          price: 18
        }, {
          id: 2,
          name: '苹果',
          price: 28
        }, {
          id: 3,
          name: '菠萝',
          price: 38
        }
      ]
    });
  }, [])

  return (
    <Context.Provider value={{fruits,dispatch}}>
      <div>
        当前选择：{fruit && fruit.name}
        <FruitAdd/>
        <ShowFurits onChange={setFruit} fruits={fruits}/>
        <TestComp/>
      </div>
    </Context.Provider>
  )
}

export default HookTest2;