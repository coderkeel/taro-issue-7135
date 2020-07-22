import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class Index extends Component {
  state = {};

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return <View>textComponent</View>;
  }
}
export default Index;
