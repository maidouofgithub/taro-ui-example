import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtList, AtListItem, AtSwitch } from 'taro-ui';

export default class List extends Component {

  config = {
    navigationBarTitleText: 'List 列表'
  }

  state = {
    hasBorder: false,
  }

  onHasBorderChange = val => {
    this.setState({ hasBorder: val });
  }

  handleClick() {
    Taro.showToast({ title: 'test' });
  }

  render() {
    return (
      <View>
        <BaseModule
          title='List 列表'
        >
          <Panel
            title='是否有边框'
          >
            <AtSwitch title='边框设置' checked={this.state.hasBorder} onChange={this.onHasBorderChange.bind(this)} />
          </Panel>

          <Panel
            title='基本用法'
          >
            <AtList>
              <AtListItem hasBorder={this.state.hasBorder} title='标题文字-点击' onClick={this.handleClick} />
              <AtListItem hasBorder={this.state.hasBorder} title='标题文字' arrow='right' />
              <AtListItem hasBorder={this.state.hasBorder} title='标题文字' extraText='详细信息' />
              <AtListItem hasBorder={this.state.hasBorder} title='禁用状态' disabled extraText='详细信息' />
            </AtList>

          </Panel>
          <Panel
            title='包含描述信息'
          >
            <AtList>
              <AtListItem title='标题文字' note='描述信息' />
              <AtListItem title='标题文字' note='描述信息' arrow='right' />
              <AtListItem
                arrow='right'
                note='描述信息'
                title='标题文字标题文字标题文字标题文字标题文字'
                extraText='详细信息详细信息详细信息详细信息'
              />
            </AtList>
          </Panel>

          <Panel
            title='包含图片'
          >
            <AtList>
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
          </Panel>
          <Panel
            title='支持图标的Item'
          >
            <AtList>
              <AtListItem title='标题文字' note='描述信息' arrow='right' iconInfo={{
                size:
                  25, color: '#78A4FA', value: 'calendar',
              }} /> <AtListItem title='标题文字'
                note='描述信息' extraText='详细信息' arrow='right' iconInfo={{
                  size: 25,
                  color: '#FF4949', value: 'bookmark',
                }} />
            </AtList>
          </Panel>

          <Panel
            title='Switch列表'
          >

            <AtListItem
              title='标题文字'
              isSwitch
              onSwitchChange={this.onHasBorderChange.bind(this)}
            />

          </Panel>

        </BaseModule>
      </View>
    );
  }
}
