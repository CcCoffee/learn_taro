
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
