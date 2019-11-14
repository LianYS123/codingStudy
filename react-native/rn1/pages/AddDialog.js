import React,{Component} from 'react'
import {View,Text,Button,StyleSheet,Picker,TextInput} from 'react-native'
import { Actions } from 'react-native-router-flux'
import datalib from '../utils/datalib'
class AddDialog extends Component{
  state = {
    income: 0,
    account: 0,
    info: ''
  }
  constructor(props){
    super(props)
  }
  joinQuery(data){
    let arr = []
    for(let key in data){
      arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    }
    let query = arr.join('&')
    console.log(query)
    return query
  }
  handleAdd = async ()=>{
    let url = `items/add?${this.joinQuery(this.state)}`
    console.log(url)
    await datalib.get(url)
    Actions.push('list',{})
  }
  handleCancel = ()=>{
      Actions.pop()
  }
  handleValueChange = (value) => {
    this.setState({income:value})
  }
  handleAcountChange = (text) => {
    this.setState({account:text})
  }
  handleInfoChange = (text) => {
    this.setState({info:text})
  }
  render(){
    return (
      <View>
          <View>
            <Picker selectedValue={this.state.income} onValueChange={this.handleValueChange}>
            <Picker.Item label="支出" value={0}></Picker.Item>
            <Picker.Item label="收入" value={1}></Picker.Item>
            </Picker>
          </View>
          <TextInput
            placeholder = '请输入金额'
            keyboardType = 'number-pad'
            onChangeText = {this.handleAcountChange}
          ></TextInput>
          <TextInput
            placeholder = '请输入备注'
            onChangeText = {this.handleInfoChange}
          ></TextInput>
          <View style={style.btns}>
              <View style={style.btn}>
                  <Button title='添加' onPress={this.handleAdd}></Button>
              </View>
              <View style={style.btn}>
                  <Button title='取消' onPress={this.handleCancel} color='#999'></Button>
              </View>
          </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
    btns:{flexDirection:'row'},
    btn:{flex:1}
})

export default AddDialog;
