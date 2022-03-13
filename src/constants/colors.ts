export const COLORS = {
  WHITE: 'white',
  BLACK: 'black',
  TRANSPARENT: 'transparent',

  PRIMARY: '#01D167',

  SECONDARY: '#25345F',
  SECONDARY_90: '#0C365A',

  GRAY: '#DDDDDD',
  GRAY_90: '#EEEEEE',
  GRAY_80: '#E5E5E5',

  PRIMARY_OPACITY: (opacity: number) => `rgba(32, 209, 103, ${opacity})`,
  BLACK_OPACITY: (opacity: number) => `rgba(34, 34, 34, ${opacity})`,
  GRAY_OPACITY: (opacity: number) => `rgba(34, 34, 34, ${opacity}))`,
  DARK_OPACITY: (o: number) => `rgba(0,45,100, ${o})`,
}
