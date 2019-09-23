import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import BaseMoule from '../../../components/taro/moudle';
import Panel from '../../../components/taro/panel';

export default class TaroButton extends Component {

  config = {
    navigationBarTitleText: 'TaroUI-Button'
  }

  state = {}

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    return (
      <View>
        <BaseMoule
          title='Button'
          moduleName='Button'
        >
          <Panel title='一般用法'>
            <AtButton>按钮文案</AtButton>
            <AtButton type='primary'>按钮文案</AtButton>
            <AtButton type='secondary'>按钮文案</AtButton>
          </Panel>

          <Panel title='不同尺寸'>
            <AtButton type='primary' size='normal'>按钮文案</AtButton>
            <AtButton type='primary' size='small'>按钮文案</AtButton>
          </Panel>

          <Panel title='带 loading icon'>
            <AtButton loading type='primary'>按钮文案</AtButton>
          </Panel>

          <Panel
          title='小按钮'
          >
            <AtButton type='primary' size='small'>按钮文案</AtButton>
          </Panel>

        </BaseMoule>
      </View>
    );
  }
}
