import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtCard } from 'taro-ui';

export default class Card extends Component {

  config = {
    navigationBarTitleText: 'Card 卡片'
  }

  state = {}

  render() {
    return (
      <View>
        <BaseModule
          title='Card 卡片'
        >
          <Panel
            title='基本用法'
          >

            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
</AtCard>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
