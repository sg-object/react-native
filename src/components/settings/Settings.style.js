import { StyleSheet } from 'react-native'
import StyleVars from '../../style/StyleVars'

export default StyleSheet.create({
  main: {
    backgroundColor: StyleVars.colors.white,
    flex: 1
  },
  menuArea: {
    padding: 15,
    paddingTop: 0
  },
  menuButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: StyleVars.colors.line
  },
  menuText: {
    fontSize: StyleVars.textSizes.l,
    color: StyleVars.colors.black
  }
})
