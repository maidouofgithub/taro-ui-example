import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtNavBar } from 'taro-ui';

import './nav.scss';

export default class Nav extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props);
    let { title, leftText } = this.state;
    this.setState({ title: props.title || title, leftText: props.leftText });
  }

  state = {
    title: '首页',
    leftText: '＜返回'
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    let { title, leftText } = this.state;
    return (
      <View className='topic-list-menu'>
        <AtNavBar
          color='#000'
          title={title}
          leftText={leftText}
          rightFirstIconType='user'
        />

      </View>

    );
  }
}
