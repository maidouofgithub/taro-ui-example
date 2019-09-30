import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtActionSheet, AtActionSheetItem } from 'taro-ui';


export default class ActionSheet extends Component {

  config = {
    navigationBarTitleText: 'ActionSheet 动作面板'
  }

  state = {
    btnSheet1: false,
    btnSheet2: false,
    btnSheet3: false,
  }

  onClose() {
      this.setState({btnSheet1:false,btnSheet2:false,btnSheet3:false});
  }

  btnClickHandle(btnSheet) {
      switch(btnSheet)
      {
        case "btnSheet1": {
          this.setState({ btnSheet1: true, btnSheet2: false, btnSheet3: false });
          break;
        }
        case "btnSheet2": {
          this.setState({ btnSheet1: false, btnSheet2: true, btnSheet3: false });
          break;
        }
        case "btnSheet3": {
          this.setState({ btnSheet1: false, btnSheet2: false, btnSheet3: true });
          break;
        }
      }
  }

  onItemClick(item){
    Taro.showToast({title:item});
  }

  render() {
    let { btnSheet1, btnSheet2, btnSheet3 } = this.state;
    return (
      <View>
        <BaseModule
          title='ActionSheet 动作面板'
        >
          <Panel title='基本用法'>
            <Button onClick={this.btnClickHandle.bind(this,"btnSheet1")}>打开ActionSheet</Button>
            <AtActionSheet isOpened={btnSheet1}>
              <AtActionSheetItem>
                按钮一 </AtActionSheetItem>
              <AtActionSheetItem>
                按钮二 </AtActionSheetItem>
            </AtActionSheet>
          </Panel>

          <Panel title='添加标题和底部取消按钮'>
          <Button onClick={this.btnClickHandle.bind(this,"btnSheet2")}>打开ActionSheet</Button>
            <AtActionSheet isOpened={btnSheet2} cancelText='取消' title='头部标题可以用通过转义字符换行'>
              <AtActionSheetItem>
                按钮一
  </AtActionSheetItem>
              <AtActionSheetItem>
                按钮二
  </AtActionSheetItem>
            </AtActionSheet>
          </Panel>

          <Panel title='添加监听事件'>
          <Button onClick={this.btnClickHandle.bind(this,"btnSheet3")}>打开ActionSheet</Button>
            <AtActionSheet isOpened={btnSheet3} cancelText='取消' title='头部标题可以用通过转义字符换行' onCancel={this.onClose.bind(this)} onClose={this.onClose.bind(this)}>
              <AtActionSheetItem onClick={this.onItemClick.bind(this)}>
                按钮一
  </AtActionSheetItem>
              <AtActionSheetItem>
                按钮二
  </AtActionSheetItem>
            </AtActionSheet>
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
