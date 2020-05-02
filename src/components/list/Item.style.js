import { StyleSheet } from 'react-native'
import StyleVars from '../../style/StyleVars'

export default StyleSheet.create({
  main: {
    backgroundColor: StyleVars.colors.white,
    flex: 1
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: StyleVars.colors.white,
    borderColor: StyleVars.colors.line
  }
})
