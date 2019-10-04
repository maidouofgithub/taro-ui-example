import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtInput, AtForm, AtButton } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Form extends Component {

  config = {
    navigationBarTitleText: 'Form 表单'
  }

  state = {
    value:''
  }

  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(event);
    console.log('submit');

  }
  onReset(event) {
    console.log(event);
    console.log('reset');
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Form 表单'
        >
          <Panel
            title='基本用法'
          >
            <AtForm
              onSubmit={this.onSubmit.bind(this)}
              onReset={this.onReset.bind(this)}
            >
              <AtInput
                name='value'
                title='文本'
                type='text'
                placeholder='单行文本'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
              <AtButton formType='submit'>提交</AtButton>
              <AtButton formType='reset'>重置</AtButton>
            </AtForm>

          </Panel>

        </BaseModule>

      </View>
    );
  }
}
