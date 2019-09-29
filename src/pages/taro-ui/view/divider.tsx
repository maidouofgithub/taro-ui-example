import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtDivider, AtIcon } from 'taro-ui';

export default class Divider extends Component {

  config = {
    navigationBarTitleText: 'Divider 分隔符'
  }

  state = {}

  render() {
    return (
      <View>
        <BaseModule
          title='Divider 分隔符'
        >
          <Panel
            title='一般用法'
          >
            <AtDivider content='分割线' />
          </Panel>

          <Panel
            title='自定义颜色'
          >
            <AtDivider content='没有更多了' fontColor='#ed3f14' lineColor='#ed3f14' />
            <AtDivider content='没有更多了' fontColor='#ff9900' lineColor='#ff9900' />
            <AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0' />
          </Panel>

          <Panel
            title='自定义内容'
            desc='只有当 content 为空时，才能嵌套子组件'
          >
            <AtDivider>
              <AtIcon value='check-circle'></AtIcon>
            </AtDivider>
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
