import {Dimensions} from 'react-native'
const BASE_WIDTH = 750
export function calc(size){
    let {width} = Dimensions.get('window')
    return size * (width / BASE_WIDTH)
}