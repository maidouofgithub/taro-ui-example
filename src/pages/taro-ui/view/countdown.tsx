import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtCountdown } from 'taro-ui'

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class CountDown extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {}

  onTimeUp() {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    });
    console.log('time is outing!');

  }

  render() {
    return (
      <View>
        <BaseModule
          title='CountDown 倒计时'
        >
          <Panel
            title='一般用法'
            desc='开发者可以设置 onTimeUp 倒计时时间到回调事件'
          >
            <AtCountdown
              style='font-size:20PX;'
              format={{ hours: ':', minutes: ':', seconds: '' }}
              seconds={10}
              onTimeUp={this.onTimeUp.bind(this)}
            />
          </Panel>

          <Panel
            title='显示天数'
          >
            <AtCountdown
              isShowDay
              day={2}
              hours={1}
              minutes={1}
              seconds={10}
            />
          </Panel>

          <Panel
            title='自定义格式化'
          >
            <AtCountdown
              isShowDay
              format={{ hours: ':', minutes: ':', seconds: '' }}
              day={2}
              hours={1}
              minutes={1}
              seconds={10}
            />
          </Panel>

          <Panel
            title='自定义格式化'
          >
            <AtCountdown
              isCard
              minutes={1}
              seconds={10}
            />
          </Panel>

        </BaseModule>
      </View>
    );
  }
}

