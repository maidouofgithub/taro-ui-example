import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

import { AtCalendar } from 'taro-ui';

export default class Calendar extends Component {

    config = {
        navigationBarTitleText: 'Calendar 日历'
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
        var now = new Date();
        let minDate = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
        let maxDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDay() + 1);
        return (
            <View>
                <BaseModule
                    title='Calendar'
                    moduleName='Calendar'
                >
                    <Panel title='一般用法'>
                        <AtCalendar />
                    </Panel>

                    <Panel title='跳转到指定日期'>
                        <AtCalendar
                            currentDate='2019-10-10'
                        />
                    </Panel>

                    <Panel title='指定最大&最小日期'>
                        <AtCalendar minDate={minDate} maxDate={maxDate} />
                    </Panel>

                    <Panel title='标记时间'>
                        <AtCalendar
                            marks={[{ value: new Date() }]}
                        ></AtCalendar>
                    </Panel>

                    <Panel title='禁止滑动'>
                        <AtCalendar isSwiper="{false}" />
                    </Panel>

                    <Panel title='垂直滑动'>
                        <AtCalendar isVertical />
                    </Panel>

                    <Panel title='范围选择'>
                        <AtCalendar isMultiSelect currentDate={{
                            start: { minDate }, end:
                                { maxDate }
                        }} />
                    </Panel>

                </BaseModule>
            </View>
        );
    }
} 