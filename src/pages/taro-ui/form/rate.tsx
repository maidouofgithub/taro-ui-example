import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtRate, AtButton,AtInput } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';


export default class Rate extends Component {

  config = {
    navigationBarTitleText: 'Rate 评分'
  }

  state = {
    value: 2,
    size: 15,
    max: 10,
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  onSizeFn(value) {
    this.setState({
      size: value
    })
  }

  onMaxFn(value) {
    this.setState({
      max: value
    })
  }

  render() {
    return (
      <View>
        <BaseModule
          title='Radio 单选框'
        >
          <Panel
            title='基本用法'
          >
            <AtRate
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

          </Panel>

          <Panel
            title='只读'
          >
            <AtRate
              value={3.5}
            />

          </Panel>

          <Panel
            title='自定义设置'
          >
            <AtRate size={this.state.size} max={this.state.max} value={this.state.value} onChange={this.handleChange} />

            <View>
              <AtInput
                name='value1'
                title='自定义星星大小'
                type='number'
                placeholder=''
                value={this.state.size}
                onChange={this.onSizeFn.bind(this)}
              />
            </View>
            <View>
              <AtInput
                name='value2'
                title='自定义评分数量'
                type='number'
                placeholder=''
                value={this.state.max}
                onChange={this.onMaxFn.bind(this)}
              />
            </View>

          </Panel>

        </BaseModule>

      </View>
    );
  }
}
