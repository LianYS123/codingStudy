import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Router, Scene} from 'react-native-router-flux'

AppRegistry.registerComponent(
    appName, 
    ()=>App
);
