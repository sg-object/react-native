import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base'

class Settings extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('Setting01')}>
              <Text>
                Setting 01
              </Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Setting02')}>
              <Text>
                Setting 02
              </Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Setting03')}>
              <Text>
                Setting 03
              </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default Settings