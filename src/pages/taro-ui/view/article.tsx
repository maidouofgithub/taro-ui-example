import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button,Image } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Article extends Component {

  config = {
    navigationBarTitleText: 'Article 文章样式'
  }

  state = {
    img:'https://jdc.jd.com/img/400x400'
  }

  render() {
    return (
      <View>
        <BaseModule
          title='Article'
        >

          <Panel
            title='可用样式类目'
          >
            <View>.at-article /* 根类名 */</View>
            <View>.at-article__h1 /* 一级标题 */</View>
            <View>.at-article__h2 /* 二级标题 */</View>
            <View>.at-article__h3 /* 三级标题 */</View>
            <View>.at-article__info /* 作者信息 */</View>
            <View>.at-article__p /* 段落 */</View>
            <View>.at-article__img /* 图片 */</View>
          </Panel>


          <Panel
            title='使用案例'
          >
            <View className='at-article'>
              <View className='at-article__h1'>
                这是一级标题这是一级标题
  </View>
              <View className='at-article__info'>
                2017-05-07&nbsp;&nbsp;&nbsp;这是作者
  </View>
              <View className='at-article__content'>
                <View className='at-article__section'>
                  <View className='at-article__h2'>这是二级标题</View>
                  <View className='at-article__h3'>这是三级标题</View>
                  <View className='at-article__p'>
                    这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </View>
                  <View className='at-article__p'>
                    这是文本段落。这是文本段落。
      </View>
                  <Image
                    className='at-article__img'
                    src='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                    mode='widthFix' />
                </View>
              </View>
            </View>
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
