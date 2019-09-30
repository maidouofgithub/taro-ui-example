import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtSwipeAction } from 'taro-ui';

export default class SwipeAction extends Component {

  config = {
    navigationBarTitleText: 'SwipeAction  滑动操作'
  }

  state = {}

  handleClick(){
    console.log('click');

  }

  render() {
    return (
      <View>

        <BaseModule
          title='SwipeAction  滑动操作'
        >

          <Panel
            title='基本示例'
          >
            <AtSwipeAction options={[
              {
                text: '取消',
                style: {
                  backgroundColor: '#6190E8'
                }
              },
              {
                text: '确认',
                style: {
                  backgroundColor: '#FF4949'
                }
              }
            ]}>
              <View className='normal'>AtSwipeAction 一般使用场景</View>
            </AtSwipeAction>
          </Panel>


          <Panel
            title='禁止滑动'
          >
            <AtSwipeAction disabled options={[
              {
                text: '取消',
                style: {
                  backgroundColor: '#6190E8'
                }
              },
              {
                text: '确认',
                style: {
                  backgroundColor: '#FF4949'
                }
              }
            ]}>
              <View className='normal'>禁止滑动展示</View>
            </AtSwipeAction>
          </Panel>

          <Panel
            title='自动关闭'
          >
            <AtSwipeAction autoClose options={[
              {
                text: '取消',
                style: {
                  backgroundColor: '#6190E8'
                }
              },
              {
                text: '确认',
                style: {
                  backgroundColor: '#FF4949'
                }
              }
            ]}>
              <View className='normal'>点击按钮自动关闭</View>
            </AtSwipeAction>
          </Panel>
          <Panel
            title='传递点击事件'
          >
            <AtSwipeAction onClick={this.handleClick.bind(this)} options={[
              {
                text: '取消',
                style: {
                  backgroundColor: '#6190E8'
                }
              },
              {
                text: '确认',
                style: {
                  backgroundColor: '#FF4949'
                }
              }
            ]}>
              <View className='normal'>点击事件触发</View>
            </AtSwipeAction>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
