import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtSlider } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Slider extends Component {

  config = {
    navigationBarTitleText: 'Slider 滑动条'
  }

  state = {}

  onChanging = e => {
    let {value} = e;
    console.log(value);
  }

  render() {
    return (
      <View>
        <BaseModule
          title='Slider 滑动条'
        >
          <Panel
            title='基本用法'
          >
            <AtSlider onChanging={this.onChanging.bind(this)}></AtSlider>
          </Panel>

          <Panel
            title='传入当前值'
          >
            <AtSlider value={50} onChanging={this.onChanging.bind(this)}></AtSlider>
          </Panel>


          <Panel
            title='设置步长'
          >
            <AtSlider step={2} onChanging={this.onChanging.bind(this)}></AtSlider>
          </Panel>


          <Panel
            title='设置取值范围'
          >
            <AtSlider min={10} max={100} onChanging={this.onChanging.bind(this)}></AtSlider>
          </Panel>


          <Panel
            title='自定义样式'
          >
            <AtSlider onChanging={this.onChanging.bind(this)} step={1} value={50} activeColor='#4285F4' backgroundColor='#BDBDBD' blockColor='#4285F4' blockSize={24}></AtSlider>
          </Panel>

          <Panel
            title='禁用状态'
          >
            <AtSlider step={1} value={50} showValue disabled></AtSlider>
          </Panel>


        </BaseModule>

      </View>
    );
  }
}
