import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import {AtPagination} from 'taro-ui';
export default class Pagination extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {}

  onPageChange(data){
    console.log(data);
    Taro.showToast({title:`${data.type}:${data.current}`});
  }

  render() {
    return (
      <View>
        <BaseModule>
          <Panel
            title='基本用法'
          >
            <AtPagination
            onPageChange={this.onPageChange.bind(this)}
              total={50}
              pageSize={10}
              current={1}
            >
            </AtPagination>
            <AtPagination
                      onPageChange={this.onPageChange.bind(this)}
              icon
              total={50}
              pageSize={10}
              current={1}
            >
            </AtPagination>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
