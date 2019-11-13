import React,{Component} from 'react'
import {Router,Scene,Stack,Lightbox} from 'react-native-router-flux'
import List from './pages/List'
import AddDialog from './pages/AddDialog'
import StartUp from './pages/StartUp'
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <Lightbox key='root'>
          <Stack>
            <Scene key='startup' component={StartUp} hideNavBar={true} title='list'></Scene>
            <Scene key='list' initial={true} component={List} hideNavBar={true} title='list'></Scene>
          </Stack>
          <Scene key='adddialog' component={AddDialog} hideNavBar={true} title='list'></Scene>
        </Lightbox>
      </Router>
    )
  }
}

export default App;
