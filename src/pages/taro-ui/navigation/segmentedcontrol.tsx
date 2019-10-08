import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import BaseModule from '@components/taro/module';
import Panel from '@components/taro/panel';
import { AtSegmentedControl,AtForm,AtSwitch，AtSlider  } from 'taro-ui';

export default class SegmentedControl extends Component {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    current: 0,
    disabled:false,
    fontSize:30,
    selectedColor:'#FF4949'
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  onSwitchChange = (val) => {
    // debugger
    this.setState({ disabled: val });
  }

  onSliderChanging(val){
    // debugger
    this.setState({ fontSize: val });
  }

  onItemChange() {
    return <View className='tab-content'>标签{this.state.current + 1}的内容</View>;
  }

  render() {
    return (
      <View>
        <BaseModule>
          <Panel
          >
             <AtForm>
              <AtSwitch title='禁用' checked={this.state.disabled} onChange={this.onSwitchChange.bind(this)}>
               </AtSwitch>
               <AtSlider min={28} max={100} showValue={true} onChange={this.onSliderChanging.bind(this)}></AtSlider>

            </AtForm>

          </Panel>

          <Panel
            title='基本用法'
          >
            <AtSegmentedControl
            fontSize={this.state.fontSize}
            selectedColor={this.state.selectedColor}
              disabled={this.state.disabled}
              values={['标签页1', '标签页2', '标签页3']}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />
            {this.onItemChange()}

          </Panel>


        </BaseModule>

      </View>
    );
  }
}
