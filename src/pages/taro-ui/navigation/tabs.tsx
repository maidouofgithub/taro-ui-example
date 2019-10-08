import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import { AtTabs, AtTabsPane, AtForm, AtSwitch } from 'taro-ui';

export default class Tabs extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    current: 0,
    tabList: [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }],
    tabList2: [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
      { title: '标签页4' },
      { title: '标签页5' },
      { title: '标签页6' }
    ],
    animated: false,
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  onSwitchChange = (val) => {
    this.setState({ animated: val });
  }

  render() {
    return (
      <View>
        <BaseModule
        >
          <Panel>
            <AtForm>
              <AtSwitch title='动画' checked={this.state.animated} onChange={this.onSwitchChange.bind(this)}>

              </AtSwitch>
            </AtForm>
          </Panel>

          <Panel
            title='基本用法'
          >
            <AtTabs
              animated={this.state.animated}
              current={this.state.current} tabList={this.state.tabList} onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
              </AtTabsPane>
            </AtTabs>
          </Panel>

          <Panel
            title='滚动标签栏'
          >
            <AtTabs
              animated={this.state.animated}
              current={this.state.current}
              scroll
              tabList={this.state.tabList2}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={4}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={5}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
              </AtTabsPane>
            </AtTabs>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
