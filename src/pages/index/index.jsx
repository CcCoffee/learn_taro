import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './Child'
import './index.less'

export default function Index() {

  const [userName,setUserName] = useState("Kevin")
  return (
    <View className='index'>
      <Text>首页</Text>
      <Child userName={userName}></Child>
    </View>
  )
}
