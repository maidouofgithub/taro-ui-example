import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './panel.scss';

export default class Panel extends Component {

  state = {}

  render() {
    return (
      <View className='panel'>
        <View className='title'>
          {this.props.title || "标题"}
        </View>
        <View className='desc'>
          {this.props.desc || ""}
        </View>
        <View className='body'> 
            {this.props.children} 
        </View>
      </View>
    );
  }
}
