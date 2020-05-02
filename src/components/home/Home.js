import React from 'react';
import { Text, View, BackHandler, ToastAndroid } from 'react-native';
import StyleVars from '../../style/StyleVars'

const main = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: StyleVars.colors.white
}

class Home extends React.Component {

  constructor(props){
    super(props)
    this.backHandler
    this.exitApp = false
  }

  componentDidMount(){
    const { navigation } = this.props;
    navigation.addListener('focus', () => {
      this.exitApp = false
      this.backHandler = BackHandler.addEventListener("hardwareBackPress", this._backHandler)
    })
    navigation.addListener('blur', () => {
      this.backHandler.remove()
    })
  }

  _backHandler = async () => {
    if(!this.exitApp){
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT)
      this.exitApp = true
      this.timeout = setTimeout(() => {
        this.exitApp = false
      }, 2000)
    }else{
      clearTimeout(this.timeout)
      BackHandler.exitApp()
    }
  }

  render() {
    return (
      <View style={main}>
        <Text>Home!</Text>
      </View>
    )
  }
}

export default Home;