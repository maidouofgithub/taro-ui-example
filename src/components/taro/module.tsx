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
    desc: '',
    showAtDrawer: false,
    AtDrawerItems: []
  }

  componentDidShow() {
    //components info

    let router = this.$router;
    if(router && router.params)
    {
      // debugger
      let params = router.params;
      let path = router.path;
      let typeInfo = Taro_UI_Data.filter((a) => {
        return a.id == params.type;
      })[0];
      let item = typeInfo.list.filter((a) => {
        return a.url===path;
      })[0];
      this.setState({ title: item.name });
       //html title
    Taro.setNavigationBarTitle({title:item.name});
    }



    let params = this.props;
    if (params && params.title && params.desc) {
      this.setState({ title: params.title, desc: params.desc });
    }
    //AtDrawerItems
    let items = Taro_UI_Data.map(type => {
      return type.name;
    });
    this.setState({ AtDrawerItems: items });
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
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
    let { title, desc, showAtDrawer, AtDrawerItems } = this.state;
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
