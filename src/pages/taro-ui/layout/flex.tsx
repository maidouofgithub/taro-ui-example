import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import "taro-ui/dist/style/components/flex.scss";
import { Taro_UI_Size } from '../../../constants/taroui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class Flex extends Component {

    config = {
        navigationBarTitleText: 'Flex 弹性布局'
    }

    state = {}

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    render() {
        return (
            <View>
                <BaseModule
                    title='Flex 弹性布局'
                    moduleName='flex'
                >
                    <Panel
                        title='使用指南'
                        desc='如果已经全局引入了 taro-ui 的样式文件，则无需再次引入'
                    >
                        <Text>由于 app.js 添加的样式文件 在小程序上只能影响 page 样式,不能影响 component 的样式，所以在使用自定义组件时，你可能需要再次引入</Text>
                    </Panel>

                    <Panel
                        title='一般用法'
                    >
                        <View className='at-row'>
                            <View className='at-col'>A</View>
                            <View className='at-col'>B</View>
                            <View className='at-col'>C</View>
                        </View>
                    </Panel>


                    <Panel
                        title='使用栅格化(长度)'
                    >
                        <View className='at-row'>
                            <View className='at-col at-col-3'>A</View>
                            <View className='at-col at-col-6'>B</View>
                            <View className='at-col at-col-2'>C</View>
                            <View className='at-col at-col-1'>D</View>
                        </View>
                    </Panel>

                    <Panel
                        title='使用栅格化(偏移)'
                    >
                        <View className='at-row'>
                            <View className='at-col at-col__offset-2'>
                                A
  </View>
                            <View className='at-col at-col__offset-3'>
                                B
  </View>
                            <View className='at-col'>C</View>
                        </View>
                    </Panel>


                    <Panel
                        title='超出换行'
                    >
                        <View className='at-row at-row--wrap'>
                            <View className='at-col at-col-4'>A</View>
                            <View className='at-col at-col-4'>B</View>
                            <View className='at-col at-col-4'>C</View>
                            <View className='at-col at-col-4'>D</View>
                            <View className='at-col at-col-4'>E</View>
                        </View>
                    </Panel>

                    <Panel
                        title='宽度根据内容撑开'
                    >
                        <View className='at-row'>
                            <View className='at-col at-col-1 at-col--auto'>
                                被内容撑开
  </View>
                            <View className='at-col'>B</View>
                        </View>
                    </Panel>

                    <Panel
                        title='内容自动换行'
                    >
                        <View className='at-row'>
                            <View className='at-col at-col-1 at-col--wrap'>
                                内容自动换行
  </View>
                            <View className='at-col'>B</View>
                        </View>
                    </Panel>

                    <Panel
                        title='侧轴方向的对齐方式'
                    >
                        <View className='at-row'>
                            <View style='height:100px' className='at-col'>A</View>
                            <View className='at-col'>默认对齐方式 -- stretch</View>
                        </View>
                        <View className='at-row at-row__align--start'>
                            <View style='height:100px' className='at-col'>B</View>
                            <View className='at-col'>顶部对齐 -- start</View>
                        </View>
                        <View className='at-row at-row__align--center'>
                            <View style='height:100px' className='at-col'>C</View>
                            <View className='at-col'>居中对齐 -- center</View>
                        </View>
                        <View className='at-row at-row__align--end'>
                            <View style='height:100px' className='at-col'>D</View>
                            <View className='at-col'>底部对齐 -- end</View>
                        </View>
                    </Panel>

                    <Panel
                        title='主轴方向的排列方式'
                    >
                        <View className='at-row'>
                            <View className='at-col at-col-5'>默认</View>
                            <View className='at-col at-col-5'>Start</View>
                        </View>
                        <View className='at-row at-row__justify--end'>
                            <View className='at-col at-col-5'>底部排列</View>
                            <View className='at-col at-col-5'>End</View>
                        </View>
                        <View className='at-row at-row__justify--center'>
                            <View className='at-col at-col-5'>居中排列</View>
                            <View className='at-col at-col-5'>Center</View>
                        </View>
                        <View className='at-row at-row__justify--between'>
                            <View className='at-col at-col-5'>左右排列</View>
                            <View className='at-col at-col-5'>Between</View>
                        </View>
                        <View className='at-row at-row__justify--around'>
                            <View className='at-col at-col-5'>平均排列</View>
                            <View className='at-col at-col-5'>Around</View>
                        </View>
                    </Panel>

                </BaseModule>
            </View>
        );
    }
} 