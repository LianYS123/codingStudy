import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList,Button,Alert} from 'react-native'
import {calc} from '../utils/common'
import { Actions } from 'react-native-router-flux'
import datalib from '../utils/datalib'
class List extends Component{
  state = {
    records:[]
  }
  constructor(props){
    super(props)
  }
  async componentDidMount(){
    let records = await datalib.get('items/list')
    console.log(records)
    if(records) this.setState({records})
  }

  async componentDidUpdate(){
    let records = await datalib.get('items/list')
    console.log(records)
    if(records) this.setState({records})
  }
  shouldComponentUpdate(nextProps,nextState){
    return JSON.stringify(this.state) != JSON.stringify(nextState) ||
     JSON.stringify(this.props) != JSON.stringify(nextProps)   
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
  name:{height:calc(80),textAlign:'center',lineHeight:calc(80),fontSize:calc(30)},
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
