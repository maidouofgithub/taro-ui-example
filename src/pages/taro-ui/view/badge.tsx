import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtBadge, AtButton } from 'taro-ui';

export default class Badge extends Component {

  config = {
    navigationBarTitleText: 'Badge 徽标'
  }

  state = {}

  render() {
    return (
      <View>
        <BaseModule
          title='Badge 徽标'

        >

          <Panel
            title='基本用法'
          >
            <AtBadge value={10} maxValue={99}>
              <AtButton size='small'>按钮</AtButton>
            </AtBadge>
          </Panel>

          <Panel
            title='小红点与文本'
          >
            <AtBadge dot>
              <AtButton size='small'>按钮</AtButton>
            </AtBadge>
            <AtBadge value='NEW'>
              <AtButton size='small'>按钮</AtButton>
            </AtBadge>
            <AtBadge value={'···'}>
              <AtButton size='small'>按钮</AtButton>
            </AtBadge>
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
