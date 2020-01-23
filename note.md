
### 1. 安装脚手架
`npm i -g @tarojs/cli`
### 2. 使用脚手架新建项目
`taro init taroDemo`
### 3. 项目启动
* Html5: `yarn dev:h5`
  - 类似于传统React应用开发，将自动打开chrome浏览器显示网页
* 微信小程序: `yarn dev:weapp`
  - 使用微信开发生工具导入新生成的dist目录，并分配一个appId
  - 点击预览按钮用手机微信扫描二维码可用手机微信直接打开该小程序
### 4. 解决旧版本导致启动警告问题
* ⚠️警告内容
  ```bash
  当前您正在使用 Taro 2.0 版本，请先执行 taro doctor 确保编译配置正确。
  如出现令你束手无策的问题，请使用 taro update 命令更新到你指定的稳定版本
  ```
* 解决方法
  - 使用`taro update self`更新到本大版本的最新版本Cli
  - 使用`taro update project`更新到最新项目依赖
### 5. React class转为hooks
* 大多数网上的taro教程都是基于class写的，其实可以基于最新的react hooks方式书写。
  ```typescript
  //Component并不引入自react组件
  import Taro, { Component } from '@tarojs/taro'
  export default class Index extends Component {}
  ```
* 改造要点
  1. 不需要引入Component
  2. 不需要继承自Component
  3. 直接使用useState等hooks特有的方法，并且是从'@tarojs/taro'引入
* 实例代码
  ```typescript
  import Taro, { useState } from '@tarojs/taro'
  export default class Index {}
  ```
### 6. Taro配置路由
* 在app.jsx中配置pages数组，pages[0]将作为默认首页
  ```javascript
  config = {
    pages: [
      'pages/blog/blog',
      'pages/index/index'
    ],
  }
  ```
* 通过`#`方式访问 : `http://172.20.10.4:10086/#/pages/index/index`
### 7. Taro的6种页面跳转方式
1. navigateTo: 最基本的跳转方式，可以返回上级页面。三端都支持的，小程序、H5、React Native。
2. redirectTo：不记录上集页面，直接跳转。三端都支持的，小程序、H5、React Native。
3. switchTab： Tab之间进行切换，这个要配合Taro的导航栏一起使用，三端都支持的，小程序、H5、React Native。
4. navigateBack: 返回上一级页面，这个在小程序中常使用，三端都支持的，小程序、H5、React Native。
5. relaunch：关闭所有额面，打开到应用内某个页面。三端都支持的，小程序、H5、React Native。
6. getCurrentPages:获取当前页面信息所用，这个H5是不支持的。（注意）
### 8. 接收路由传递的参数
`http://172.20.10.4:10086/#/pages/index/index?title=My%20blog&author=Kevin%20Zheng`

使用this.$router.params接收参数
```javascript
useEffect(()=>{
  setTitle(this.$router.params.title);
  setAuthor(this.$router.params.author);
},[])
```
### 9. Taro静态文件的使用
* 工具方法的引入
    - src/tools/index.js
      ```javascript
      export function foo(){
        console.log("foo...")
      }

      export function bar(){
        console.log("bar...")
      }
      ```
    - 引入代码
      ```javascript
      import {foo,bar} from '../../tools'
      ```
* 两种图片的引入方式
  ```javascript
  import img from '../../static/1.png'
  export default function Blog(){
    return (
      <View>
        <Image src={img} />&nbsp;
        <Image src={require("../../static/1.png")} />
      </View>
    )
  }
  ```
### 10. Taro的条件运算符
> Taro不能使用if else语句，只能使用三目运算符和短路运算符
* 三目运算符
```javascript
<Text>
  {author === 'Kevin Zheng' ? "Kevin's Blog":"Other's Blog"}
</Text>
```
* 短路运算符
```javascript
<Text>{1==1 && 'true' || 'false'}</Text>
```
