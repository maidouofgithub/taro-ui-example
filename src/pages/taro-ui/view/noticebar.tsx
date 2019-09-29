import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtNoticebar } from 'taro-ui';

export default class NoticeBar extends Component {

  config = {
    navigationBarTitleText: 'NoticeBar 通告栏'
  }

  state = {}

  onGotoMore() {
    console.log('点击了查看更多');
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Noticebar 通告栏'
        >

          <Panel
            title='文字'
          >
            <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
            <AtNoticebar>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
          </Panel>

          <Panel
            title='文字滚动'
          >
            <AtNoticebar marquee speed={100}>
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，速度:100px/s
</AtNoticebar>
            <AtNoticebar marquee speed={150}>
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，速度:150px/s
</AtNoticebar>
            <AtNoticebar marquee speed={200}>
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，速度:200px/s
</AtNoticebar>
          </Panel>

          <Panel
            title='带图标'
          >
            <AtNoticebar icon='volume-plus'>
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
          </Panel>

          <Panel
            title='查看更多'
          >
            <AtNoticebar
              close={true}
              icon='volume-plus'
              moreText='查看详情'
              showMore={true}
              onGotoMore={this.onGotoMore.bind(this)}
            >
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
