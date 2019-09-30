import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtActivityIndicator  } from 'taro-ui';
export default class ActivityIndicator extends Component {

  config = {
    navigationBarTitleText: 'ActivityIndicator 活动指示器'
  }

  state = {}


  render() {
    return (
      <View>
        <BaseModule
          title='ActivityIndicator 活动指示器'
        >
          <Panel
            title='基本用法'
          >
            <AtActivityIndicator></AtActivityIndicator>
          </Panel>

          <Panel
            title='自定义尺寸'
          >
            <AtActivityIndicator size={32}></AtActivityIndicator>
          </Panel>

          <Panel
            title='自定义颜色'
          >
            <AtActivityIndicator color='#13CE66'></AtActivityIndicator>
          </Panel>

          <Panel
            title='自定义需要展示的文字'
          >
           <AtActivityIndicator content='加载中...'></AtActivityIndicator>
          </Panel>
          <Panel
            title='垂直水平居中（当设置 center 时需要给父容器提供 position: relative 属性）'
          >
           <AtActivityIndicator mode='center'></AtActivityIndicator>
          </Panel>


        </BaseModule>
      </View>
    );
  }
}
