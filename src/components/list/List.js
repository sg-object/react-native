import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Item from './Item'

class List extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    let arr = []
    for (let i = 1; i <= 30; i++) {
      arr.push({'id': i, 'name': 'Item_' + i})
    }
    this.setState({list: arr})
  }

  goDetail = (info) => {
    this.props.navigation.navigate('Detail', {
      info: info
    })
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.list}
          keyExtractor={(item, index) => index + ''}
          renderItem={({ item }) => (
            <Item
              info={item}
              goDetail={this.goDetail}
            />
          )}
        />
      </SafeAreaView>
    )
  }
}

export default List