import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image, Swiper, SwiperItem } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtForm, AtSwitch,AtSlider } from 'taro-ui';

export default class SwiperDemo extends Component {

  config = {
    navigationBarTitleText: 'Swiper 滑块视图容器'
  }

  state = {
    value: false,
    indicatorDots:false,
    autoplay:false,
    interval:0,
    duration:0,
    current:0,
  }

  handleChange() {

  }

  render() {
    return (
      <View>

        <BaseModule
          title='Swiper 滑块视图容器'
        >
          <Panel
            title='基本用法'
            desc='滑块视图容器，常用于走马灯、轮播图'
          >
            <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              vertical={false}
              circular={true}
              indicatorDots={this.state.indicatorDots}
              autoplay={this.state.autoplay}
              >
              <SwiperItem>
                <Image style='width:100%;height:7.68rem;' src='https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180'></Image>
              </SwiperItem>
              <SwiperItem>
                <Image style='width:100%;height:7.68rem;' src='https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'></Image>
              </SwiperItem>
              <SwiperItem>
                <Image style='width:100%;height:7.68rem;' src='https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180'></Image>
              </SwiperItem>
              <SwiperItem>
                <Image style='width:100%;height:7.68rem;' src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'></Image>
              </SwiperItem>
            </Swiper>

            <AtForm>
              <AtSwitch title='指示点' onChange={this.handleChange} />
              <AtSwitch title='自动播放' onChange={this.handleChange} />
              <AtSwitch title='循环播放' onChange={this.handleChange} />

              <AtSlider min={500} max={2000}></AtSlider>

              <AtSlider min={2000} max={10000}></AtSlider>

            </AtForm>
          </Panel>
        </BaseModule>

      </View>
    );
  }
}
