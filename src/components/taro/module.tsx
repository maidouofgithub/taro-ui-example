import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtButton, AtNavBar, AtDrawer } from "taro-ui";
import { Taro_UI_Data } from '../../constants/taroui';

import '../../components/taro/module.scss';


export default class BaseModule extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    showAtDrawer: false,
    AtDrawerItems: []
  }

  componentWillMount() {
    let params = this.props;
    this.setState({ title: params.title });
    let items = Taro_UI_Data.map(type => {
      return type.name;
    });
    this.setState({ AtDrawerItems: items });
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  onClickLeftIcon() {
    Taro.navigateBack();
  }

  onClickRgIconSt() {
    this.setState({ showAtDrawer: true });
  }

  onCloseAtDrawer() {
    this.setState({ showAtDrawer: false });
  }

  onAtDrawerItemClick(index) {
    console.log(index);
    let type = Taro_UI_Data[index];
    console.log(type);
    if (type && type.id) {
      Taro.navigateTo({ url: '/pages/taro-ui/list?id=' + type.id });
    }
  }

  render() {
    let { title, showAtDrawer, AtDrawerItems } = this.state;
    return (

      <View className='base-module'>
        <View>
          <AtNavBar
            onClickLeftIcon={this.onClickLeftIcon.bind(this)}
            onClickRgIconSt={this.onClickRgIconSt.bind(this)}
            // onClickRgIconNd={this.handleClick}

            color='#000'
            leftText='<Back'
            title={title}
            rightFirstIconType='bullet-list'
          />
          <View>
            {this.props.children}
          </View>
        </View>
        <AtDrawer
          show={showAtDrawer}
          mask
          right={true}
          onClose={this.onCloseAtDrawer.bind(this)}
          items={AtDrawerItems}
          onItemClick={this.onAtDrawerItemClick.bind(this)}
        ></AtDrawer>
      </View>

    );
  }
}
