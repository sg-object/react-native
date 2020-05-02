import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Style from './Settings.style'

class Settings extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={Style.main}>
        <TouchableOpacity
          style={Style.menuButton}
          onPress={() => this.props.navigation.navigate('Setting01')}>
          <Text style={Style.menuText}>
            Setting 01
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.menuButton}
          onPress={() => this.props.navigation.navigate('Setting02')}
        >
          <Text style={Style.menuText}>
            Setting 02
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.menuButton}
          onPress={() => this.props.navigation.navigate('Setting03')}
        >
          <Text style={Style.menuText}>
            Setting 03
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Settings