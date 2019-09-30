import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';


import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtMessage,AtButton } from 'taro-ui';

export default class Message extends Component {

  config = {
    navigationBarTitleText: 'Message 消息通知'
  }

  state = {}

  handleClick(type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Message 消息提示'
        >

          <Panel
            title='基本示例'
            desc='code'
          >
             <AtMessage />
        <AtButton onClick={this.handleClick.bind(this)}>
          普通消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'success')}>
          成功消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'error')}>
          错误消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'warning')}>
          警告消息
        </AtButton>

           </Panel>

        </BaseModule>

      </View>
    );
  }
}
