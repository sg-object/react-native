import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, BackHandler, ToastAndroid } from 'react-native';
import { inject } from 'mobx-react'
import StyleVars from '../../style/StyleVars'
import SplashScreen from 'react-native-splash-screen'

const main = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: StyleVars.colors.white
}

@inject('homeStore')
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
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
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
        <Text>{this.props.homeStore.text}</Text>
      </View>
    )
  }
}

Home.propTypes = {
  homeStore: PropTypes.object
}

export default Home;