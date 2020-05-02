// 공통으로 사용되는 Sytle 속성

const colors = {
  black: '#000000',
  white: '#fff',
  whiteDark: '#f2f2f2',
  softBlue: '#4fadf9',
  orange: '#ff840d',
  greyDarkest: '#222222',
  greyDarken: '#333333',
  greyDark: '#666',
  greyShade: '#7a7a7a',
  grey: '#888888',
  greyLighten: '#939393',
  greyLighter: '#cdcdcd',
  greyLightest: '#e0e0e0',
  green: '#36a77c',
  blue: '#0179df',
  red: '#f01919',
  lightPink: '#fcf6f2'
}

const sizes = {
  l: 48,
  m: 44,
  s: 24
}

export default {
  container: {
    flex: 1
  },
  colors: {
    line: colors.greyLightest,
    point: '#1b4692',
    item: '#3f8cc8',
    modal: '#262626',
    error: '#ff5a49',
    background: colors.white,
    default: colors.white,
    alert: colors.red,
    good: colors.green,
    cancel: '#666666',
    text: colors.greyDark,
    textDark: colors.greyDarkest,
    textLight: colors.greyLighten,
    void: colors.whiteDark,
    icon: colors.greyShade,
    formFocused: colors.lightPink,
    defaultTab: '#484e64',
    greyBackground: '#f3f4f6',
    fieldLine: '#f6f6f6',
    ...colors
  },
  sizes: sizes,
  textSizes: {
    l: 16,
    m: 14,
    s: 13,
    xs: 12
  },
  buttons: {
    l: { height: sizes.l },
    m: { height: sizes.m },
    s: { height: sizes.s }
  },
  void: 11,
  space: 15,
  margin: 15,
  padding: 15,
  presets: {
    flex: {
      flex: 1
    }
  }
}
