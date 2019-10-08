import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import { AtTabBar, AtForm, AtSwitch,AtIcon  } from 'taro-ui';

export default class TabBar extends Component {

  config = {
    navigationBarTitleText: 'TabBar 标签栏'
  }

  state = {
    current: 0,
    tabList: [
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
    ],
    backgroundColor: '#ececec',
    color: '#ea6bb8',
    fixed: false,
    tabListIcon: [
      { title: '自定义图标', iconPrefixClass: 'fa', iconType: 'clock', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
    ],
    tabListImg:[
      { title: '领取中心', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
      { title: '找折扣', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },
      { title: '领会员', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: '99' }

    ]
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }

  onFixedChange(val) {
    this.setState({ fixed: val });
  }

  render() {
    return (
      <View>
        <BaseModule
        >

          <Panel>

            <AtForm>
              <AtSwitch title='固定底部' checked={this.state.fixed} onChange={this.onFixedChange.bind(this)}></AtSwitch>
            </AtForm>

          </Panel>

          <Panel
            title='带图标'
          >
            <AtTabBar
              tabList={this.state.tabList}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />

          </Panel>

          <Panel
            title='自定义图标颜色、字体颜色、背景颜色'
          >
            <AtTabBar
              fixed={this.state.fixed}
              backgroundColor={this.state.backgroundColor}
              color={this.state.color}
              tabList={this.state.tabList}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />

          </Panel>
          <Panel
            title='自定义图标'>
            <AtTabBar
              tabList={this.state.tabListIcon}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />

          </Panel>

          <Panel
            title='自定义图片'>
            <AtTabBar
              tabList={this.state.tabListImg}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />

          </Panel>

        </BaseModule>
      </View>
    );
  }
}
