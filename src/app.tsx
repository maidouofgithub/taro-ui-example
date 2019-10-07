import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index';
require('@tarojs/async-await');

import 'taro-ui/dist/style/index.scss';
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [

       //others
      //  'pages/others/canvas',

      // 'pages/index/index',
      'pages/taro-ui/index',
      'pages/taro-ui/list',
      //taro-ui
      //basic
      'pages/taro-ui/basic/button',
      'pages/taro-ui/basic/fab',
      'pages/taro-ui/basic/icon',
      //view
      'pages/taro-ui/view/avatar',
      'pages/taro-ui/view/article',
      'pages/taro-ui/view/badge',
      'pages/taro-ui/view/countdown',
      'pages/taro-ui/view/curtain',
      'pages/taro-ui/view/divider',
      'pages/taro-ui/view/noticebar',
      'pages/taro-ui/view/tag',
      'pages/taro-ui/view/timeline',
      'pages/taro-ui/view/steps',
      'pages/taro-ui/view/loadmore',
      'pages/taro-ui/view/swiper',

      //action
      'pages/taro-ui/action/actionsheet',
      'pages/taro-ui/action/activityindicator',
      'pages/taro-ui/action/modal',
      'pages/taro-ui/action/progress',
      'pages/taro-ui/action/toast',
      'pages/taro-ui/action/swipeaction',
      'pages/taro-ui/action/message',
      //form
      'pages/taro-ui/form/form',
      'pages/taro-ui/form/input',
      'pages/taro-ui/form/inputnumber',
      'pages/taro-ui/form/radio',
      'pages/taro-ui/form/checkbox',
      'pages/taro-ui/form/rate',
      'pages/taro-ui/form/textarea',
      'pages/taro-ui/form/switch',
      'pages/taro-ui/form/picker',
      'pages/taro-ui/form/searchbar',
      'pages/taro-ui/form/slider',
      'pages/taro-ui/form/imagepicker',
      'pages/taro-ui/form/rang',
      //layout
      'pages/taro-ui/layout/flex',
      // 'pages/taro-ui/layout/grid',

      //navigation
      'pages/taro-ui/navigation/navbar',

      //advanced
      'pages/taro-ui/advanced/calendar',


    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   color: '#666',
    //   selectedColor: "#b4282d",
    //   backgroundColor: "#fafafa",
    //   borderStyle: 'black',
    //   list: [{
    //     pagePath: "pages/index/index",
    //     // iconPath: "./assets/image/tab-bar/home.png",
    //     // selectedIconPath: "./assets/image/tab-bar/home-active.png",
    //     text: "首页"
    //   }, {
    //     pagePath: "pages/index/index",
    //     // iconPath: "./assets/image/tab-bar/types.png",
    //     // selectedIconPath: "./assets/image/tab-bar/types-active.png",
    //     text: "分类"
    //   }, {
    //     pagePath: "pages/index/index",
    //     // iconPath: "./assets/image/tab-bar/cart.png",
    //     // selectedIconPath: "./assets/image/tab-bar/cart-active.png",
    //     text: "购物车"
    //   }, {
    //     pagePath: "pages/index/index",
    //     // iconPath: "./assets/image/tab-bar/user.png",
    //     // selectedIconPath: "./assets/image/tab-bar/user-active.png",
    //     text: "个人"
    //   }]
    // }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
