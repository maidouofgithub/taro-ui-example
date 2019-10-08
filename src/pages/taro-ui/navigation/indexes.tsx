import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import { AtIndexes } from 'taro-ui';

export default class Indexes extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    list: [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
    },
    {
      title: 'B',
      key: 'B',
      items: [
        {
          'name': '北京'
        },
        {
          'name': '保定'
        }]
    }
    ]
  }

  onClick(item) {

    Taro.showToast({ title: item.name });
  }

  render() {
    return (
      <View>
        <BaseModule>

          <Panel
            title='基本示例'
          >
            <AtIndexes
              list={this.state.list}
              onClick={this.onClick.bind(this)}
            >
              <View>自定义内容</View>
            </AtIndexes>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
