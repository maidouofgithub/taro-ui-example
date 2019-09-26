import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtIcon } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Icon extends Component {


  render() {
    return (
      <View>

        <BaseModule
          title='Icon'
          moduleName='Icon'
        >

          <Panel title='一般用法'>
          <AtIcon value='clock' size='30' color='#F00'></AtIcon>
          </Panel>

        </BaseModule>

      </View>
    );
  }

}
