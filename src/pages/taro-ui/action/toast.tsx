import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtToast } from 'taro-ui';

export default class Toast extends Component {

  config = {
    navigationBarTitleText: 'Toast 轻提示'
  }

  state = {}

  onShowToast(title){
    Taro.showToast({title:title});
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Toast 轻提示'
        >

          <Panel
          title='代码调用实例'
          desc='code'
          >
              <Button onClick={this.onShowToast.bind(this,'代码调用实例')}>toast测试</Button>
          </Panel>

          <Panel
            title='基本用法'
          >
            <AtToast
              isOpened
              text="{text}"
              icon="{icon}"
            ></AtToast>
          </Panel>

          <Panel
            title='添加遮罩'
          >
            <AtToast
              isOpened
              hasMask={true}
              text="{text}"
              icon="{icon}"
            ></AtToast>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
