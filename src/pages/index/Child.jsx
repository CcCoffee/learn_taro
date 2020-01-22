import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

export default function Child(props){
  return (
    <View><Text>Child-{props.userName}</Text></View>
  )
}
