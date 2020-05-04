import React from 'react';
import PropTypes from 'prop-types'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { inject } from 'mobx-react'

@inject('listStore')
class Detail extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>ID</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.listStore.detail.id}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>NAME</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.listStore.detail.name}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

Detail.propTypes = {
  navigation: PropTypes.object,
  listStore: PropTypes.object
}

export default Detail