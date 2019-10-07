import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtSwitch, AtForm } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';


export default class Switch extends Component {

  config = {
    navigationBarTitleText: 'Switch 开关'
  }

  state = {
    checked: false,

  }

  onHandleChange(value) {
    console.log(value);

    this.setState({ checked: value },()=>{
      console.log(value);
    })
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Switch 开关组件'
        >
          <Panel
            title='基本用法'
            desc='该组件为受控组件，通过checked初始化开关状态'
          >
            <AtForm>
              <AtSwitch title='开启中' checked={this.state.checked} onChange={this.onHandleChange.bind(this)} />
              <AtSwitch title='已禁止' disabled onChange={this.onHandleChange.bind(this)} />
              <AtSwitch border={false} title='已关闭' onChange={this.onHandleChange.bind(this)}/>
            </AtForm>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
