import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import { AtDrawer, AtRadio, AtForm, AtSwitch, AtIcon } from 'taro-ui';

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    right: false,
    show: false,
    mask: true,
    items: ['菜单1', '菜单2'],
    width: '230px'
  }

  onClose() {
    this.setState({
      show: false
    })
  }

  handleRadioChange(value) {
    this.setState({
      right: value
    })
  }

  onItemClick(index)
  {
    Taro.showToast({title:'click:'+index});
  }

  onRadioShow(val)
  {
    this.setState({
      show: val
    })
  }

  render() {
    return (
      <View>

        <BaseModule>

          <Panel>
            <AtForm>
              <AtRadio
                options={[
                  { label: '左边滑出', value: false, desc: '单选项描述' },
                  { label: '右边滑出', value: true },
                ]}
                value={this.state.right}
                onClick={this.handleRadioChange.bind(this)}
              ></AtRadio>

              <AtSwitch title='显示' checked={this.state.show} onChange={this.onRadioShow.bind(this)}></AtSwitch>

            </AtForm>
          </Panel>

          <Panel
            title='自定义内容'
          >
            <AtDrawer
              width={this.state.width}
              show={this.state.show}
              right={this.state.right}
              mask={this.state.right}
              onClose={this.onClose.bind(this)}
              items={this.state.items}
              onItemClick={this.onItemClick.bind(this)}
            >
              <View className='drawer-item'>优先展示items里的数据</View>
              <View className='drawer-item'>如果items没有数据就会展示children</View>
              <View className='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></View>
              <View className='drawer-item'>这是自定义内容</View>
            </AtDrawer>

          </Panel>
        </BaseModule>

      </View>
    );
  }
}
