import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Test from '../../components/text'

class Index extends Component {
  componentWillMount() {
    console.log('page C will mount')
  }

  componentDidMount() {
    console.log('page C did mount')
  }

  config: Config = {
    navigationBarTitleText: 'page c'
  }

  render() {
    return (
      <View className='index'>
        <Text>page C</Text>
        <Test></Test>
      </View>
    )
  }
}

export default Index as ComponentType
