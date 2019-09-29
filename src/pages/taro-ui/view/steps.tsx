import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtSteps } from 'taro-ui';

export default class Steps extends Component {

  config = {
    navigationBarTitleText: 'Steps 步骤条'
  }

  state = {
    current: 0
  }

  onChange(current) {
    this.setState({
      current
    })
  }

  render() {
    const items = [
      { 'title': '步骤一'  },
      { 'title': '步骤二'  },
      { 'title': '步骤三'  }
    ];
    const items2 = [
      {
        'title': '步骤一',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤二',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤三',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      }
    ];
    const items3 = [
      {
        'title': '步骤一',
        'desc': '这里是额外的信息，最多两行',
        'success': true
      },
      {
        'title': '步骤二',
        'desc': '这里是额外的信息，最多两行'
      },
      {
        'title': '步骤三',
        'desc': '这里是额外的信息，最多两行',
        'error': true
      }
    ]
    return (
      <View>

        <BaseModule
          title='Steps 步骤条'
        >
          <Panel
            title='基本用法'
            desc='该组件为受控组件，开发者需要通过 onChange 事件来更新 current 值变化，current 与 onChange 函数必填'
          >
            <AtSteps
              items={items}
              current={this.state.current}
              onChange={this.onChange.bind(this)}
            />
          </Panel>

          <Panel
            title='带附加信息'
           >
            <AtSteps
              items={items2}
              current={this.state.current}
              onChange={this.onChange.bind(this)}
            />
          </Panel>

          <Panel
            title='自定义图标'
           >
            <AtSteps
              items={items2}
              current={this.state.current}
              onChange={this.onChange.bind(this)}
            />
          </Panel>

          <Panel
            title='状态步骤条'
           >
            <AtSteps
              items={items3}
              current={this.state.current}
              onChange={this.onChange.bind(this)}
            />
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
