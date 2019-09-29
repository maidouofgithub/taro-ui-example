import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtTag } from 'taro-ui';

export default class Tag extends Component {

  config = {
    navigationBarTitleText: 'Tag 标签'
  }

  state = {
    active: false
  }

  onClick(obj) {
    Taro.showToast({ title: obj.name + ' click' });
    obj && obj.active ? this.setState({ active: false }) : this.setState({ active: true });
  }

  render() {
    return (
      <View>

        <BaseModule
          title='Tag 标签'
        >
          <Panel
            title='用法'
          >
            <AtTag>标签</AtTag>
            <AtTag type='primary' circle>标签</AtTag>
            <AtTag size='small'>标签</AtTag>
          </Panel>

          <Panel
            title='点击事件'
          >
            <AtTag
              name='tag-1'
              type='primary'
              circle
              active={this.state.active}
              onClick={this.onClick.bind(this)}
            >
              tag-1
</AtTag>
          </Panel>

          <Panel
            title='不可点击'
          >
            <AtTag
              size='small'
              name='small'
              type='primary'
              disabled = {true}
              circle
              active={this.state.active}
              onClick={this.onClick.bind(this)}
            >
              small
</AtTag>
            <AtTag
              size='normal'
              name='normal'
              type='primary'
              disabled = {true}
              circle
              active={this.state.active}
              onClick={this.onClick.bind(this)}
            >
              normal
</AtTag>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
