import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtRadio } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Radio extends Component {

  config = {
    navigationBarTitleText: 'Radio 单选框'
  }

  state = {
    value:''
  }

  handleChange (value) {
    console.log(value);

    this.setState({
      value
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
            <AtRadio
              options={[
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2' },
                { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
              ]}
              value={this.state.value}
              onClick={this.handleChange.bind(this)}
            />

          </Panel>
        </BaseModule>

      </View>
    );
  }
}
