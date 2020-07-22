import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'
import Test from '../../components/text/index'

class Index extends Component {
  componentWillMount() {
    console.log('page b will mount')
  }
  componentDidMount() {
    console.log('page b did mount')
  }

  config = {
    navigationBarTitleText: 'B页面'
  }

  render() {
    return (
      <View>
        <Text>page B</Text>
        <Test></Test>
        <Navigator url='/pages/c/index'>跳转到c</Navigator>
      </View>
    )
  }
}
export default Index
