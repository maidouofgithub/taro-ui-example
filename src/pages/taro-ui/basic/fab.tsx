import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtFab } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class FabButton extends Component {

  onButtonClick() {
    console.log('fab button click!');
  }

  render() {
    return (
      <View className='fab-demo'>

        <BaseModule title='Fab 浮动按钮'>

          <Panel title='用法' desc='浮动按钮默认不会脱离文档流，请自行包含一个父元素并设置 fixed 定位'>
            <AtFab>
              <Text className='at-fab__icon at-icon at-icon-menu'></Text>
            </AtFab>
          </Panel>

          <Panel title='点击事件'>
            <AtFab onClick={this.onButtonClick.bind(this)}>
              <Text className='at-fab__icon at-icon at-icon-menu'></Text>
            </AtFab>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
