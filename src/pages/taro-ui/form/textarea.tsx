import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtForm, AtTextarea } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class TextArea extends Component {

  config = {
    navigationBarTitleText: 'TextArea 多行文本框'
  }

  state = {
    value: ''
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    },()=>{console.log(event);
    })
  }

  render() {
    return (
      <View>

        <BaseModule
          title='TextArea 多行文本框'
        >
          <Panel
            title='基本用法'
            desc='该组件为受控组件，通过checked初始化开关状态'
          >
            <AtForm>
              <AtTextarea
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                maxLength={200}
                placeholder='你的问题是...'
              />
            </AtForm>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
