import React from 'react'
import PropTypes from 'prop-types'
import Style from './List.style'
import { View, Text, FlatList, Alert } from 'react-native'
import { observer, inject } from 'mobx-react'
import Item from './Item'

@inject('listStore')
@observer
class List extends React.Component {
  
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this._addItem()
  }

  componentWillUnmount(){
    this.props.listStore.unmount()
  }

  goDetail = (info) => {
    this.props.listStore.setDetail(info)
    this.props.navigation.navigate('Detail')
  }

  _header = () => {
    return (
      <View style={Style.header}>
        <Text>Count : {this.props.listStore.list.length}</Text>
      </View>        
    )
  }

  _addItem = () => {
    if(this.props.listStore.list.length >= 30){
      Alert.alert("Over Count!!!")
    }else{
      this.props.listStore.addItem()
    }
  }

  render() {
    return (
      <View style={Style.main}>
        <FlatList
          data={this.props.listStore.list}
          keyExtractor={(item, index) => index + ''}
          ListHeaderComponent={this._header}
          onEndReached={this._addItem.bind(this)}
          onEndReachedThreshold={0.2}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <Item
              info={item}
              goDetail={this.goDetail}
            />
          )}
        />
      </View>
    )
  }
}

List.propTypes = {
  navigation: PropTypes.object,
  listStore: PropTypes.object
}

export default List