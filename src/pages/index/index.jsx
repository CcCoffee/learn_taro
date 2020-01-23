import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './Child'
import './index.less'

export default function Index() {

  const [userName,setUserName] = useState("Kevin")
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")

  useEffect(()=>{
    setTitle(this.$router.params.title);
    setAuthor(this.$router.params.author);
  },[])
  return (
    <View className='index'>
      <Text>首页</Text>
      <Child userName={userName}></Child>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  )
}
