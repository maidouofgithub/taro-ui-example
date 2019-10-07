import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtRange,AtToast } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';


export default class Rang extends Component {

  config = {
    navigationBarTitleText: 'Rang 范围选择器'
  }

  state = {
    isOpened: false,
    text: ''
  }

  handleChange(value) {
    this.setState({
      isOpened: true,
      text: `${value[0]}~${value[1]}`
    })
  }

  render() {
    return (
      <View>


        <BaseModule
          title='Rang 范围选择器 '
        >
          <Panel
            title='基本用法'
          >
            <AtToast
              text={this.state.text}
              isOpened={this.state.isOpened}
            />
            <AtRange
              value={[20, 60]}
              min={0}
              max={100}
              onChange={this.handleChange.bind(this)}
            />
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
