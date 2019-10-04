import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtInputNumber, AtButton,AtInput } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class InputNumber extends Component {

  config = {
    navigationBarTitleText: 'Input Number'
  }

  constructor() {
    super(...arguments)
    this.state = {
      value: 1
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }

  state = {
    value:'',
    disable:false,
    step:0.1
  }

  onDisableFn()
  {
    let {disable} = this.state;
    disable?this.setState({disable:false}):this.setState({disable:true});
  }

  stepChange(value)
  {
    this.setState({
      value
    });
    return value;
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Input Number'
        >

          <Panel
            title='基本用法'
          >
            <AtInputNumber
             disabled={this.state.disable}
              min={0}
              max={10}
              step={this.state.step}
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

            <View>
              <AtButton onClick={this.onDisableFn.bind(this)}>禁用/启用</AtButton>
            </View>
            <View>
              <AtInput
                name='value5'
                title='步进:'
                type='digit'
                placeholder='请输入小数'
                value={this.state.step}
                onChange={this.stepChange.bind(this)}
              />
            </View>

          </Panel>

        </BaseModule>

      </View>
    );
  }
}
