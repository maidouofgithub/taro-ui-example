
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtCheckbox } from 'taro-ui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class CheckBox extends Component {

  config = {
    navigationBarTitleText: 'CheckBox 复选框'
  }

  state = {
    checkBoxOption: [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    }, {
      value: 'list2',
      label: 'HUAWEI P20'
    }, {
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    }, {
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    }],
    selectedList: []
  }

  handleChange(value) {
    this.setState({
      selectedList: value
    })
  }

  render() {
    return (
      <View>

        <BaseModule
          title='CheckBox 复选框'
        >
          <Panel
            title='基本使用'
          >
            <AtCheckbox
              options={this.state.checkBoxOption}
              selectedList={this.state.selectedList}
              onChange={this.handleChange.bind(this)}
            />
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
