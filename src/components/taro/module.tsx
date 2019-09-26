import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtButton, AtNavBar } from "taro-ui";

import '../../components/taro/module.scss';


export default class BaseModule extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    homeRouter: '../',
  }

  componentWillMount() {
    let params = this.props;
    this.setState({ title: params.title });
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }


  render() {
    let { title } = this.state;
    return (

      <View className='base-module'>

        <AtNavBar
          // onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          // onClickLeftIcon={this.handleClick}
          color='#000'
          leftText='<Back'
          title={title}
          rightFirstIconType='bullet-list'
        />

        <View>
        {this.props.children}
        </View>

        {/*
        <View className='button'>
          <AtButton type='primary' size='normal'>返回</AtButton>
        </View> */}

      </View>

    );
  }
}
