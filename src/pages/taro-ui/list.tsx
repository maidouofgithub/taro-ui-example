import Taro, { Component, navigateTo } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './list.scss';

import { Taro_UI_Data } from '../../constants/taroui';

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props || props.id
    }
  }

  config = {
    navigationBarTitleText: '组件列表'
  }

  state = {
    id: 'basic',
    obj: {} //当前选中组件
  }

  componentWillMount() {
    var params = this.$router.params;
    var select = Taro_UI_Data.filter((a) => {
      return a.id == params.id;
    });


    this.setState({ obj: select[0] }, () => {
      console.log(this.state.obj);
    });
  }

  onClick(item){
    if (item && item.url) {
      Taro.navigateTo({ url: item.url });
    }
  }

  onClickHandle(){
  Taro.navigateTo({url:'/pages/taro-ui/index'});
  }

  render() {
    var { obj } = this.state;
    return (
      <View className='component-list'>
        <View className='component-header'>
          <View className='component-header-icon'></View>
          <Text className='component-header-title' onClick={this.onClickHandle.bind(this)}>{obj.name}</Text>
        </View>
        <View>
          {obj && obj.list.map((item, index) => {
            return (
              <View className='component-list-item' onClick={this.onClick.bind(this,item)}><Text className='component-list-item-name'>{index}.{item.name}</Text><View className='at-icon at-icon-chevron-right'></View></View>
            )
          })}
        </View>
      </View>
    );
  }
}
