import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList,Button} from 'react-native'
import {calc} from '../utils/common'
import { Actions } from 'react-native-router-flux'
class List extends Component{
  state = {
    records:[
      {id:1,account:10000,info:'工资',time:'2019-11-11',income:1},
      {id:2,account:8000,info:'老王还钱',time:'2019-11-8',income:1},
      {id:4,account:100,info:'吃饭',time:'2019-10-13',income:0},
      {id:6,account:100000,info:'买车',time:'2019-9-13',income:0},
    ]
  }
  constructor(props){
    super(props)
  }
  handlePress = ()=>{
    Actions.push('adddialog',{})
  }
  render(){
    return (
      <View style={style.bg}>
        <View style={style.header}>
          <Text style={style.name}>小账本</Text>
          <View style={style.pay}>
            <View style={style.detail}>
              <Text style={style.num}>13000</Text>
              <Text style={style.text}>本月收入</Text>
            </View>
            <View style={style.detail}>
              <Text style={style.num}>110</Text>
              <Text style={style.text}>本月支出</Text>
            </View>
          </View>
          <View style={style.total}>
              <Text style={style.num}>12890</Text>
              <Text style={style.text}>本月总计</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.records}
            keyExtractor={record=>record.id+''}
            renderItem={({item})=>(
              <View style={style.item}>
                <Text style={style.field}>{item.income?'收入':'支出'}</Text>
                <Text style={style.field}>{item.income?'+'+item.account : '-'+item.account}</Text>
                <Text style={style.field}>{item.info}</Text>
                <Text style={style.field}>{item.time}</Text>
              </View>
            )}
          />
        </View>
        <View style={style.btn}>
          <Button color='green' title="记一笔" onPress={this.handlePress}></Button>
        </View>
      </View>
    )
  }
}
let style = StyleSheet.create({
  bg:{width:calc(750),backgroundColor:'white',height:'100%',backgroundColor:'#CCC'},
  header:{backgroundColor:'skyblue',height:'20%',flexDirection:'column',justifyContent:'center'},
  name:{height:calc(80),textAlign:'center',flex:1,lineHeight:calc(80),fontSize:calc(30)},
  pay:{flexDirection:"row",flex:2,alignItems:"center"},
  detail:{flex:1},
  num:{height:calc(40),fontSize:calc(30),textAlign:'center',lineHeight:calc(40)},
  text:{height:calc(40),fontSize:calc(20),textAlign:'center',lineHeight:calc(40)},
  total:{flex:2},
  item:{flexDirection:'row',justifyContent:'center',width:calc(750),marginTop:calc(20)},
  field:{flex:1,textAlign:'center',height:calc(80),lineHeight:calc(80)},
  btn:{position:'absolute',bottom:0,width:'100%'}
})

export default List;
