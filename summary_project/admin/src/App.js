import React,{Component} from 'react';
import Table from './components/Table'
import Pagination from './components/Pagination'

class App extends Component {
  constructor(...args){
    super(...args)
    this.state = {
      datas : [],
      pageCount: 10,
      curr: 1
    }
  }
  async loadData(size=10){
    let page = this.state.curr
    console.log(`load data on page ${page}`);
    
    let result = await fetch(`http://localhost:8080/api/booklist/${page}/${size}`)
    let res =  await result.json()
    if(res.ok){
      this.setState({
        datas: res.data,
        pageCount:res.pageCount
      })
    }
    else {
      console.error(res.err)
    }
  }
  async componentDidMount(){
    await this.loadData()
  }
  render(){
    let self = this
    let fields = [
      {name:'id',text:'ID'},
      {name:'title',text:'名称'},
      {name:'author',text:'作者'},
      {name:'icon',text:'封面',icon:true},
      {name:'description',text:'描述'},
      {name:'mark_score',text:'评分'}
    ]
    let btns = [
      {
        text:'修改',
        callback(id){
          alert(`${id} will be modified`)
        },
        classList:['btn btn-primary']
      },
      {
        text:'删除',
        callback(id){
          alert(`${id} will be deleted`)
        },
        classList:['btn btn-danger']
      },
    ]
    let datas = this.state.datas

    let curr = this.state.curr
    let count = this.state.pageCount
    let pageOptions = {
      count,
      curr,
      callback:async function(page,e){
        e.preventDefault()
        console.log(page)
        if(page == self.state.curr) return;
        await self.setState({
          curr:page
        })
        await self.loadData()
        
      }
    }
    return (
      <div className="App">
        <Table fields={fields} btns={btns} datas={datas}></Table>
        <Pagination options={pageOptions} key={this.state.curr}></Pagination>
      </div>
    );
  }
}

export default App;
