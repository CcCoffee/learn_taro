import Taro,{useState,useEffect, requirePlugin} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
// import Tools from '../../tools'
import {foo,bar} from '../../tools'
import img from '../../static/1.png'

export default function Blog(){

  const [title,setTitle] = useState('My blog')
  const [author,setAuthor] = useState('Kevin Zheng')
  const [articleList, serArticleList] = useState([]);

  useEffect(()=>{
    foo();
    bar();
  },[])

  const backToHome = function(){
    // Taro.navigateTo({url:"/pages/index/index"});
    //关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    //没办法后退到上一个页面，直接返回首页
    Taro.redirectTo({url:`/pages/index/index?title=${title}&author=${author}`})
  }

  const handleArticleList = function(){
    Taro.request({
      method: 'GET',
      url: 'https://apiblog.jspang.com/default/getArticleList'
    }).then(
      res=>{
        console.log(res.data.list)
        serArticleList(res.data.list)
      }
    )
  }

  return (
    <View>
      <Text>
        {author === 'Kevin Zheng' ? "Kevin's Blog":"Other's Blog"}
      </Text>&nbsp;
      <Text>{1==1 && 'true' || 'false'}</Text>
      <Button onClick={backToHome}>返回首页</Button>
      <Button onClick={handleArticleList}>获取文章列表</Button>
      <Image src={img} />&nbsp;
      <Image src={require("../../static/1.png")} />
      <View>
        {
          articleList.map((item,index)=>{
            return (
            <View key={item.id}>{index+1} : {item.title}</View>
            )
          })
        }
      </View>
    </View>
  )
}
