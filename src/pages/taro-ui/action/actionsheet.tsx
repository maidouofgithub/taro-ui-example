import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtActionSheet } from 'taro-ui';


export default class ActionSheet extends Component {

    config = {
        navigationBarTitleText: 'ActionSheet 动作面板'
    }

    state = {

    }

    render() {
        return (
            <View>
                <BaseModule
                    title='ActionSheet 动作面板'
                >
                    <Panel title='基本用法'>
                        <AtActionSheet isOpened>
                            <AtActionSheetItem>
                                按钮一 </AtActionSheetItem>
                            <AtActionSheetItem>
                                按钮二 </AtActionSheetItem>
                        </AtActionSheet>
                    </Panel>

                    <Panel title='添加标题和底部取消按钮'>
                        <AtActionSheet isOpened cancelText='取消' title='头部标题可以用通过转义字符换行'>
                            <AtActionSheetItem>
                                按钮一
  </AtActionSheetItem>
                            <AtActionSheetItem>
                                按钮二
  </AtActionSheetItem>
                        </AtActionSheet>
                    </Panel>

                </BaseModule>
            </View>
        );
    }
} 