import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtCurtain, AtButton } from 'taro-ui';

export default class Curtain extends Component {

  config = {
    navigationBarTitleText: 'Curtain 幕帘'
  }

  state = {
    isOpened: false
  }

  handleChange() {
    this.setState({
      isOpened: true
    })
  }

  onClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    return (
      <View>
        <BaseModule
          title='Curtain 幕帘'
        >
          <Panel
            title='一般用法'
            desc='该组件为受控组件，组件的开关状态由 isOpened 来控制，开发者需要通过 onClose 事件来更新 isOpened 值变化,从而关闭幕帘'
          >
            <AtCurtain
              isOpened={this.state.isOpened}
              onClose={this.onClose.bind(this)}
              closeBtnPosition='top-right'
            >
              <Image
                style='width:100%;height:250px'
                src='https://taro-ui.aotu.io/h5/static/images/curtain.png'
              />
            </AtCurtain>
            <AtButton
              onClick={this.handleChange.bind(this)}>
              右上关闭幕帘
      </AtButton>
          </Panel>

          <Panel
            title='关闭图标的位置'
          >
          <Text>
          closeBtnPosition:
          </Text>
          <Text>'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'</Text>
          </Panel>

        </BaseModule>
      </View>
    );
  }
}


