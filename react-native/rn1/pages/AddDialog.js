import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux'
class AddDialog extends Component{
  constructor(props){
    super(props)
  }
  handleAdd = ()=>{}
  handleCancel = ()=>{
      Actions.push('list',{})
  }
  render(){
    return (
      <View>
          <Text>AddDialog</Text>
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
