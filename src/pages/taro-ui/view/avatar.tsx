import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtAvatar } from 'taro-ui';
import { Taro_UI_Size } from '../../../constants/taroui';
import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel'; 

export default class Avatar extends Component {

    config = {
        navigationBarTitleText: 'Avatar 头像'
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
                    title='Avatar 头像'
                    moduleName='Avatar'
                >
                    <Panel title='圆形头像'>
                        {Taro_UI_Size.map(a => {
                            return (
                                <AtAvatar size={a} className='subitem' circle image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
                            )
                        })}
                    </Panel>
                    <Panel title='圆角矩形头像'>
                        {Taro_UI_Size.map(a => {
                            return (
                                <AtAvatar size={a}  className='subitem' image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
                            )
                        })}
                    </Panel>
                    <Panel title='圆形头像(文本)'>
                        {Taro_UI_Size.map(a => {
                            return (
                                <AtAvatar size={a} className='subitem' circle text='凹凸实验室'></AtAvatar>)
                        })}
                    </Panel>
                    <Panel title='圆角矩形头像(文本)'>
                        {Taro_UI_Size.map(a => {
                            return (
                                <AtAvatar size={a} className='subitem' text='凹凸实验室'></AtAvatar>)
                        })}
                    </Panel>

                </BaseModule>
            </View>
        );
    }
} 