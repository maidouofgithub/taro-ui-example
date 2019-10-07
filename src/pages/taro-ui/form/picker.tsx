import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Picker } from '@tarojs/components';


import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';


export default class Picker1 extends Component {

  config = {
    navigationBarTitleText: 'Picker 选择器'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    multiSelector: [['美国', '中国', '巴西', '日本'], ['美国', '中国', '巴西', '日本']],
    selectorChecked: '美国',
    multiSelectorChecked: [],
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onMultiChange = e => {
    let selecteds = e.detail.value;
    let arr = [];
    arr.push(this.state.multiSelector[0][selecteds[0]]);
    arr.push(this.state.multiSelector[1][selecteds[1]]);
    this.setState({
      multiSelectorChecked: arr
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Picker 选择器'
        >
          <Panel
            title='普通选择器'
            desc='mode 区分选择器类型'
          >

            <Picker mode='selector' range={this.state.selector} onChange={this.onChange.bind(this)}>
              <View className='picker'>
                当前选择：{this.state.selectorChecked}
              </View>
            </Picker>

          </Panel>

          <Panel
            title='多列选择器'
          >

            <Picker mode='multiSelector' range={this.state.multiSelector} onChange={this.onMultiChange.bind(this)}>
              <View className='picker'>
                当前选择：{this.state.multiSelectorChecked}
              </View>
            </Picker>

          </Panel>

          <Panel
            title='时间选择器'
          >

            <Picker mode='time' onChange={this.onTimeChange.bind(this)}>
              <View className='picker'>
                当前选择：{this.state.timeSel}
              </View>
            </Picker>

          </Panel>

          <Panel
            title='日期选择器'
          >

            <Picker mode='date' onChange={this.onDateChange.bind(this)}>
              <View className='picker'>
                当前选择：{this.state.dateSel}
              </View>
            </Picker>

          </Panel>
        </BaseModule>

      </View>
    );
  }
}
