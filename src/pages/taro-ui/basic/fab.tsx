import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtFab } from 'taro-ui';

import BaseMoule from '../../../components/taro/moudle';
import Panel from '../../../components/taro/panel';

export default class FabButton extends Component {

  onButtonClick()
  {
    console.log('fab button click!');
  }

  render() {
    return (
      <View className='fab-demo'>

        <AtFab onClick={this.onButtonClick.bind(this)}>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>

      </View>
    );
  }
}
