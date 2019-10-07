import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtImagePicker } from 'taro-ui';

import BaseModule from '../../../components/taro/module';
import Panel from '../../../components/taro/panel';

export default class ImagePicker extends Component {

  config = {
    navigationBarTitleText: 'ImagePicker 图片选择器'
  }

  state = {
    files: [{
      url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
    },
    {
      url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
    },
    {
      url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
    }]
  }

  onChange(files) {
    this.setState({
      files
    })
  }
  onFail(mes) {
    console.log(mes)
  }
  onImageClick(index, file) {
    console.log(index, file)
  }

  render() {
    return (
      <View>

        <BaseModule
          title='ImagePicker '
        >
          <Panel
            title='基本用法'
          >
            <AtImagePicker
              files={this.state.files}
              onChange={this.onChange.bind(this)}
            />
          </Panel>

          <Panel
            title='多选图片'
          >
            <AtImagePicker
              multiple
              files={this.state.files}
              onChange={this.onChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </Panel>

          <Panel
            title='自定义行数量'
          >
            <AtImagePicker
              length={5}
              count={8}
              files={this.state.files}
              onChange={this.onChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </Panel>

          <Panel
            title='多种图片预览模式'
          >
            <AtImagePicker
              mode='top'
              files={this.state.files}
              onChange={this.onChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </Panel>

        </BaseModule>

      </View>
    );
  }
}
