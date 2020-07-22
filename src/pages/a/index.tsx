import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'
import Test from '../../components/text'

class Index extends Component {
  componentWillMount() {
    console.log('page A will mount')
  }

  componentDidMount() {
    console.log('page A did mount')
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Text>page A</Text>
        <Test></Test>
        <Navigator url='/pages/b/index'>跳转到 Page B</Navigator>
      </View>
    )
  }
}

export default Index as ComponentType
