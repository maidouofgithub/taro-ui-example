import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtLoadMore } from 'taro-ui';

export default class LoadMore extends Component {

   config = {
       navigationBarTitleText: 'LoadMore 页面提示'
  }

  state={
    status:'more'
  }

  handleClick () {
    // 开始加载
    this.setState({
      status: 'loading'
    })
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }

  render() {
    return (
      <View>
         <BaseModule
          title='LoadMore 页面提示'
        >
          <Panel
            title='基本用法'
            desc='开发者自行控制 status 来控制展示的状态'
          >
            <AtLoadMore
              onClick={this.handleClick.bind(this)}
              status={this.state.status}
            />
          </Panel>
          </BaseModule>
      </View>
    );
  }
}
