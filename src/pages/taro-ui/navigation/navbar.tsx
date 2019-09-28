import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtNavBar } from 'taro-ui';
export default class NavBar extends Component {

  config = {
    navigationBarTitleText: 'NavBar 导航栏'
  }

  state = {}

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <View>
        <BaseModule
          title='NavBar'>
          <Panel
            title='基础用法'>
            <AtNavBar
              onClickRgIconSt={this.handleClick.bind(this)}
              onClickRgIconNd={this.handleClick.bind(this)}
              onClickLeftIcon={this.handleClick.bind(this)}
              color='#000'
              title='NavBar 导航栏示例'
              leftText='返回'
              rightFirstIconType='bullet-list'
              rightSecondIconType='user'
            />
          </Panel>
          <Panel
            title='自定义标题内容'
            desc='注意 title 属性须为空'
          >
            <AtNavBar
              onClickRgIconSt={this.handleClick}
              onClickRgIconNd={this.handleClick}
              onClickLeftIcon={this.handleClick}
              color='#000'
              leftText='返回'
              rightFirstIconType='bullet-list'
              rightSecondIconType='user'
            >
              <View>Taro UI</View>
            </AtNavBar>
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
