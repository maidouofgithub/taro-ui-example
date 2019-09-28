import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtInput, AtForm } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Input extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: 'Input 按钮'
  }

  state = {
    value:'',
    value1:'',
    value2:'',
    value3:'',
    value4:'',
    value5:'',
    value6:'',
    value7:'',
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Input 按钮'
        >
          <Panel
            title='基础用法'
          >
            <AtInput
              name='value'
              title='标准五个字'
              type='text'
              placeholder='标准五个字'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value'
              title='标题实在特别长就换行'
              type='text'
              placeholder='标题实在特别长就换行'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

          </Panel>

          <Panel
            title='输入框类型'>
            <AtForm>
              <AtInput
                name='value1'
                title='文本'
                type='text'
                placeholder='单行文本'
                value={this.state.value1}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='value2'
                title='数字'
                type='number'
                placeholder='请输入数字'
                value={this.state.value2}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='value3'
                title='密码'
                type='password'
                placeholder='密码不能少于10位数'
                value={this.state.value3}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='value4'
                title='身份证'
                type='idcard'
                placeholder='身份证号码'
                value={this.state.value4}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='value5'
                title='小数'
                type='digit'
                placeholder='请输入小数'
                value={this.state.value5}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='value6'
                border={false}
                title='手机号码'
                type='phone'
                placeholder='手机号码'
                value={this.state.value6}
                onChange={this.handleChange.bind(this)}
              />
            </AtForm>

          </Panel>

        </BaseModule>

      </View>
    );
  }
}
