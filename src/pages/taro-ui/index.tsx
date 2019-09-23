import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtGrid } from "taro-ui"
import Nav from '../../components/taro/nav';
import { Taro_UI } from '../../constants/taroui';

import './index.scss';

export default class TaroUIDemo extends Component {



  config = {
    navigationBarTitleText: 'Taro UI'
  }

  state = {
    token: '',
    components: []
  }

  componentWillMount() {
    this.setState({ components: Taro_UI }, () => {
      console.log(this.state.components);
    });
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  gridClickHandle(item, index) {
    // console.log(index);
    // console.log(item);
    if (item && item.type) {
      Taro.navigateTo({ url: '/pages/taro-ui/list?id=' + item.type });
    }
  }

  render() {
    let { components } = this.state;
    return (
      <View className='taro-index'>

        <View className='nav'>
          <Nav title='Taro UI' leftText='组件列表'></Nav>
        </View>

        <View className='components'>
        {components.map(a => { return <View>{a.name}</View> })}
        </View>

      </View>
    );
  }
}
