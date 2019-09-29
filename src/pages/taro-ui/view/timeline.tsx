import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';
import { AtTimeline } from 'taro-ui';

export default class Timeline extends Component {

  config = {
    navigationBarTitleText: 'Timeline 时间轴'
  }

  state = {}

  render() {
    return (
      <View>
        <BaseModule
          title='Timeline 时间轴'
        >
          <Panel
            title='基本用法'
          >
            <AtTimeline
              items={[
                { title: '刷牙洗脸' },
                { title: '吃早餐' },
                { title: '上班' },
                { title: '睡觉' }
              ]}
            >
            </AtTimeline>
          </Panel>

          <Panel
            title='基本用法'
          >
            <AtTimeline
              items={[
                { title: '刷牙洗脸' },
                { title: '吃早餐', color: 'green' },
                { title: '上班', color: 'red' },
                { title: '睡觉', color: 'yellow' }
              ]}
            >
            </AtTimeline>
            <AtTimeline
              items={[
                { title: '刷牙洗脸', icon: 'check-circle' },
                { title: '吃早餐', icon: 'clock' },
                { title: '上班', icon: 'clock' },
                { title: '睡觉', icon: 'clock' }
              ]}
            >
            </AtTimeline>
          </Panel>

          <Panel
            title='标记最后一个未完成'
            desc='标记最后一个为幽灵节点（即时间轴未完成，还在记录过程中）'
          >
            <AtTimeline
              pending
              items={[
                { title: '刷牙洗脸' },
                { title: '吃早餐' },
                { title: '上班' },
                { title: '睡觉' }
              ]}
            >
            </AtTimeline>
          </Panel>

          <Panel
            title='添加更多的内容'
          >
            <AtTimeline
              pending
              items={[
                { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
                { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' },
                { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' },
                { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
              ]}
            >
            </AtTimeline>
          </Panel>

        </BaseModule>

      </View >
    );
  }
}
