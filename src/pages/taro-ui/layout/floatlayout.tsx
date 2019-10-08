import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtFloatLayout, AtButton, AtSwitch, AtForm } from 'taro-ui';

export default class FloatLayout extends Component {

  config = {
    navigationBarTitleText: 'FloatLayout 浮动弹层'
  }

  state = {
    isOpened: false,
    scrollWithAnimation: false,
    scrollWithAnimationChecked:false,
  }

  handleClose = () => {
    Taro.showToast({ title: 'close' });
    this.setState({ isOpened: false });
  }

  onOpenLayout() {
    this.setState({ isOpened: true });
  }

  onChange(value) {
    this.setState({ scrollWithAnimation: value,scrollWithAnimationChecked:value });
  }

  render() {
    return (
      <View>
        <BaseModule>

          <Panel title='设置'>
            <AtForm>
              <AtSwitch title='滚动条上使用动画过渡' checked={this.state.scrollWithAnimationChecked} onChange={this.onChange.bind(this)}></AtSwitch>
            </AtForm>
          </Panel>
          <Panel
            title='基本用法'
            desc='isOpened 控制开启'
          >

            <AtButton
              onClick={this.onOpenLayout.bind(this)}
            >
              打开FloatLayout
            </AtButton>

            <AtFloatLayout scrollWithAnimation={this.state.scrollWithAnimation} isOpened={this.state.isOpened} title="这是个标题" onClose={this.handleClose.bind(this)}>
              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写

              这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
              随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
</AtFloatLayout>

          </Panel>
        </BaseModule>
      </View>
    );
  }
}
