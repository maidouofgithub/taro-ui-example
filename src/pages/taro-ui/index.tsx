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
      // console.log(this.state.components);
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
          <Nav title='Taro UI' leftText=''></Nav>
        </View>

        <View className='component-list'>
          {components.map((item, index) => {
            return (
              <View className='ar-row at-row__align--center component-item'>
                <View className='at-col'>
                  <span className='  at-icon at-icon-settings'></span>
                </View>

                <View className='at-col'>
                  <Text className='  name'>  {item.name} </Text>
                  <Text className='  desc'> 包含 {item.list.slice(0, 3).map(a =>return a.name.split(' ')[1]).join(' ')} 等</Text>
                </View>
                <View className='at-col'>
                  <span className='  at-icon at-icon-chevron-right'></span>
                </View>
              </View>

            );
          })}
        </View>

      </View>
    );
  }
}
