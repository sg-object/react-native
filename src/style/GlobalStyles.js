// 공통으로 사용되는 Sytle

import StyleVars from './StyleVars'

const buttonMargin = 10
const buttonCommon = {
  marginRight: buttonMargin,
  marginLeft: buttonMargin,
  flexGrow: 1,
  borderRadius: 4,
  justifyContent: 'center'
}

export default {
  buttonBlock: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 20
  },
  buttonPrime: {
    backgroundColor: StyleVars.colors.point,
    ...buttonCommon
  },
  buttonCancel: {
    backgroundColor: StyleVars.colors.cancel,
    ...buttonCommon
  },
  buttonLabel: {
    color: StyleVars.colors.default,
    fontWeight: 'bold',
    fontSize: 15
  }
}
