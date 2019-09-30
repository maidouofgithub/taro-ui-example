import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';

export default class Modal extends Component {

  config = {
    navigationBarTitleText: 'Modal 模态窗'
  }

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
  }

  onClose() {
    this.setState({ modal1: false, modal2: false, modal3: false, modal4: false, modal5: false });
  }

  btnClickHandle(modal) {
    switch (modal) {
      case "modal1": {
        this.setState({ modal1: true });
        break;
      }
      case "modal2": {
        this.setState({ modal2: true });
        break;
      }
      case "modal3": {
        this.setState({ modal3: true });
        break;
      }
    }
  }

  render() {
    let { modal1, modal2, modal3, modal4, modal5 } = this.state;
    return (
      <View>
        <BaseModule
          title='Modal 模态窗'
        >
          <Panel
            title='基本用法'
          >
            <Button onClick={this.btnClickHandle.bind(this,'modal1')}>打开基础模态窗</Button>
            <AtModal isOpened={modal1} onClose={this.onClose.bind(this)}>
              <AtModalHeader>标题</AtModalHeader>
              <AtModalContent>
                这里是正文内容，欢迎加入京东凹凸实验室
                这里是正文内容，欢迎加入京东凹凸实验室
                这里是正文内容，欢迎加入京东凹凸实验室
              </AtModalContent>
              <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>
            </AtModal>
          </Panel>

          <Panel
            title='简化使用'
          >
            <Button onClick={this.btnClickHandle.bind(this,'modal2')}>打开简化模态窗</Button>
            <AtModal
              isOpened={modal2}
              title='标题'
              cancelText='取消'
              confirmText='确认'
              content='欢迎加入京东凹凸实验室'
            />
          </Panel>

        </BaseModule>
      </View>
    );
  }
}
