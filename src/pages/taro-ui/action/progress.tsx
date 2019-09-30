import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtProgress } from 'taro-ui';

export default class Progress extends Component {

  config = {
    navigationBarTitleText: 'Progress 进度条'
  }

  state = {
    num:0
  }

  componentWillMount(){
    setInterval(()=>{
      let num = this.state.num;
      if(num>=100)
      {
        num=0;
      }
        this.setState({num:num+1});
    },1000);
  }

  render() {
    return (
      <View>
        <BaseModule
          title='Progress 进度条'
        >
          <Panel
            title='基本用法'
          >
            <AtProgress percent={80}></AtProgress>
          </Panel>

          <Panel
            title='传入当前进度'
          >
            <AtProgress percent={25} />
            <AtProgress percent={50} />
            <AtProgress percent={75} />
          </Panel>

          <Panel
            title='是否隐藏信息'
          >
            <AtProgress percent={25} isHidePercent />
            <AtProgress percent={75} isHidePercent />
          </Panel>

          <Panel
            title='自定义进度条的线宽'>
            <AtProgress percent={25} color='#FF4949' />
            <AtProgress percent={50} color='#13CE66' />
            <AtProgress percent={75} color='#FFC82C' />
          </Panel>

          <Panel
            title='传入不同的状态'>
            <AtProgress percent={75} status='error' />
            <AtProgress percent={50} status='progress' />
            <AtProgress percent={100} status='success' />
          </Panel>

          <Panel
            title='进度演示'>
            <AtProgress percent={this.state.num} status='progress' />
          </Panel>


        </BaseModule>

      </View>
    );
  }
}
