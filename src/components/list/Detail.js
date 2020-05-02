import React from 'react';
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native';

class Detail extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Detail !!!!</Text>
      </View>
    )
  }
}

Detail.propTypes = {
  navigation: PropTypes.object
}

export default Detail