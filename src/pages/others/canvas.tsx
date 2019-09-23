import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Canvas,CoverView} from '@tarojs/components';

import GRADUAL from 'better-gradual';

export default class CanvasDemo extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount() {
    const canvas = Taro.createCanvasContext('canvas', this);
    new GRADUAL({
      canvas: canvas,//canvas实例
      width: 800,//canvas宽度
      direction: 'column',//渐变方向
      height: 2000,//canvas高度
      stepNum: 100,//渐变步长
      colorList: [//渐变颜色
        {
          color: '#ff0e0f',//色值
          pos: 0//位置
        },
        {
          color: '#e09f0f',
          pos: 0.5
        },
        {
          color: '#0e3f0f',
          pos: 1
        }
      ]
    });
  }
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}
  render() {
    return (
      <View>
        <Canvas className='canvas' canvasId='canvas'>
          <CoverView className='view'>hello world</CoverView>
        </Canvas>
      </View>
    );
  }
}
