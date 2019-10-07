import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtSearchBar } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';


export default class SearchBar extends Component {

  config = {
    navigationBarTitleText: 'SearchBar 搜索栏'
  }

  state = {
    value: ''
  }

  onChange(value, event) {
    this.setState({
      value: value
    },
      () => {
        console.log(value);
        // console.log(event);

      }
    )
  }

  onActionClick() {
    console.log('开始搜索:' + this.state.value);
  }

  render() {
    return (
      <View>


        <BaseModule
          title='SearchBar 搜索栏'
        >
          <Panel
            title='基本用法'
             >

            <AtSearchBar
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />

          </Panel>
          <Panel
            title='自定义按钮文字和点击事件'
              >

            <AtSearchBar
              actionName='搜一下'
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />


          </Panel>

          <Panel
            title='自定义按钮文字和点击事件'
           >

            <AtSearchBar
              showActionButton
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />


          </Panel>

        </BaseModule>
      </View>
    );
  }
}
