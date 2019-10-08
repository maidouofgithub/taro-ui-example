import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtAccordion, AtList, AtListItem, AtForm, AtSwitch } from 'taro-ui';

export default class Accordion extends Component {

  config = {
    navigationBarTitleText: 'Accordion 手风琴'
  }

  state = {
    open: false,
    hasBorder: false,
    isAnimation: false,

  }

  handleClick = (open, event) => {
    this.setState({ open: open });
  }

  onSwitchChange = ( type,val) => {

    switch (type) {
      case 'open': {
        this.setState({ open: val });
        break;
      }
      case 'border': {
        this.setState({ hasBorder: val });
        break;
      }
      case 'animation': {
        this.setState({ isAnimation: val });
        break;
      }
    }


  }

  render() {
    return (
      <View>
        <BaseModule
          title='Accordion 手风琴'
        >
          <Panel>
            <AtForm>

              <AtSwitch title='是否默认开启' checked={this.state.open} onChange={this.onSwitchChange.bind(this, 'open')}></AtSwitch>
              <AtSwitch title='是否有动画' checked={this.state.isAnimation} onChange={this.onSwitchChange.bind(this, 'animation')}></AtSwitch>

              <AtSwitch title='是否有边框'  checked={this.state.hasBorder} onChange={this.onSwitchChange.bind(this, 'border')}></AtSwitch>
            </AtForm>
          </Panel>

          <Panel
            title='基本用法'
          >

            <AtAccordion
              hasBorder={this.state.hasBorder}
              isAnimation={this.state.isAnimation}
              open={this.state.open}
              title='标题三'
              icon={{ value: 'chevron-down', color: 'red', size: '15' }}>
              <AtList hasBorder={false}>
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />
                <AtListItem
                  title='标题文字'
                  note='描述信息'
                  arrow='right'
                  thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                />
                <AtListItem
                  title='标题文字'
                  note='描述信息'
                  extraText='详细信息'
                  arrow='right'
                  thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                />
              </AtList>
            </AtAccordion>

          </Panel>

        </BaseModule>

      </View>
    );
  }
}
