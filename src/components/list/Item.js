import React from 'react';
import PropTypes from 'prop-types'
import Style from './Item.style'
import { Text, TouchableOpacity } from 'react-native';

class Item extends React.Component {
  
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.info.id !== nextProps.info.id
  }

  render() {
    let info = this.props.info
    return (
      <TouchableOpacity
        style={Style.item}
        onPress={() => {this.props.goDetail(info)}}
      >
        <Text>{info.name}</Text>
      </TouchableOpacity>
    )
  }
}

Item.propTypes = {
  info: PropTypes.object,
  goDetail: PropTypes.func
}

export default Item