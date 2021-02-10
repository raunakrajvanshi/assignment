import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 350;

function normalizeFontSize(size) {
  return Math.round(size / PixelRatio.getFontScale());
}
const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

const colors = {
  primary: '#EE3A23',
  lightPrimary: '#fde9e7',
  secondary: '#660531',
  tertiary: '#5b45a4',
  buttonPrimary: '#F85032',
  buttonSecondary: '#2196F3',
  orange: '#F85A3E',
  lightGrey: '#ACACAC',
  darkGrey: '#616161',
  borderGrey: '#9E9E9E',
  white: '#ffffff',
  offWhite: '#FAFAFA',
  helpbackground: '#F8F8F8',
  lightGreen: '#69c501',
  green: '#4CAF50',
  offWhite: 'rgba(255, 255, 255,0.5)',
  offWhite_03: 'rgba(255, 255, 255,0.3)',
  placeholderLight: '#acacac',
  placeholderDark: '#282828',
  black: '#212121',
  pureBlack: '#000000',
  mediumGray: '#606060',
  lightBlack: '#424242',
  placeholder: '#787878',
  inactive: '#BDBDBD',
  answerText: '#999999',
  error: '#ff0000',
  yellow: '#FCB614',
  pureYellow: '#FDD835',
  cardbg: '#ecebeb',
  progressInactive: '#E6E6E6',
  background: '#F5F5F5',
  divider: '#757575',
  loginCardBg: '#FFFBEE',
  referCardBg: '#EBEBEB',
  servicesCardBg: '#FFF3CF',
  unregisterPlaceBg: '#FFF9E8',
  descText: '#6A6A6A',
  dateTime: '#7E7E7E',
  offerInsc: '#707070',
  termsText: '#5A5A5A',
  chipBg: '#212121',
};

const padding = {
  none: 0,
  p2: 2,
  p3: 3,
  xsm: 5,
  p7: 7,
  sm: 10,
  p10: 10,
  p15: 15,
  p17: 17,
  md: 20,
  p25: 25,
  lg: 30,
  p40: 40,
  p60: 60,
  p65: 65,
  p80: 80,
};

const margin = {
  none: 0,
  m1: 1,
  m2: 2,
  m3: 3,
  m4: 4,
  xsm: 5,
  sm: 10,
  m15: 15,
  md: 20,
  m25: 25,
  lg: 30,
  m40: 40,
  m50: 50,
  m70: 70,
  m75: 75,
};

const fonts = {
  f8: normalizeFontSize(8),
  f9: normalizeFontSize(9),
  f10: normalizeFontSize(10),
  f11: normalizeFontSize(11),
  f12: normalizeFontSize(12),
  f13: normalizeFontSize(13),
  f14: normalizeFontSize(14),
  f15: normalizeFontSize(15),
  f16: normalizeFontSize(16),
  f18: normalizeFontSize(18),
  f20: normalizeFontSize(20),
  f21: normalizeFontSize(21),
  f22: normalizeFontSize(22),
  f24: normalizeFontSize(24),
  f26: normalizeFontSize(26),
  f28: normalizeFontSize(28),
  f30: normalizeFontSize(30),
  f40: normalizeFontSize(40),
  f48: normalizeFontSize(48),
};

const flex = {
  none: 0,
  sm: 0.5,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
};

const elevation = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

const size = {
  sp2: 0.2,
  sp3: 0.3,
  sp4: 0.4,
  sp5: 0.5,
  sp7: 0.7,
  sp8: 0.8,
  sp9: 0.9,
  none: 0,
  s1: 1,
  s1_5: 1.5,
  s1_7: 1.7,
  s2: 2,
  s3: 3,
  s4: 4,
  s5: 5,
  s7: 7,
  s8: 8,
  s10: 10,
  s12: 12,
  s13: 13,
  s15: 15,
  s16: 16,
  s18: 18,
  s20: 20,
  s22: 22,
  s25: 25,
  s30: 30,
  s33: 33,
  s35: 35,
  s40: 40,
  s45: 45,
  s50: 50,
  s52: 52,
  s55: 55,
  s60: 60,
  s65: 65,
  s70: 70,
  s72: 72,
  s75: 75,
  s80: 80,
  s90: 90,
  s95: 95,
  s100: 100,
  s120: 120,
  s150: 150,
  s200: 200,
  s250: 250,
  s320: 320,
  s500: 500,
};

const percentage = {
  p5: '5%',
  p10: '10%',
  p15: '15%',
  p17: '17%',
  p20: '20%',
  p25: '25%',
  p30: '30%',
  p35: '35%',
  p40: '40%',
  p45: '45%',
  p48: '48%',
  p50: '50%',
  p60: '60%',
  p70: '70%',
  p75: '75%',
  p80: '80%',
  p85: '85%',
  p90: '90%',
  p95: '95%',
  p100: '100%',
};

const fontFamily = {
  primary: Platform.OS === 'android' ? 'Roboto' : 'Roboto',
  primaryBold: Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
  primaryMedium: Platform.OS === 'android' ? 'Roboto-Medium' : 'Roboto-Medium',
  primaryLight: Platform.OS === 'android' ? 'Roboto-Light' : 'Roboto-Light',
  primaryThin: Platform.OS === 'android' ? 'Roboto-Thin' : 'Roboto-Thin',
  secondary:
    Platform.OS === 'android'
      ? 'HelveticaNeueLTStd-Lt'
      : 'HelveticaNeueLTStd-Lt',
  secondaryThin:
    Platform.OS === 'android'
      ? 'HelveticaNeueLTStd-Th'
      : 'HelveticaNeueLTStd-Th',
  secondaryMedium:
    Platform.OS === 'android'
      ? 'HelveticaNeueLTStd-Md'
      : 'HelveticaNeueLTStd-Md',
  secondaryHeavy:
    Platform.OS === 'android'
      ? 'HelveticaNeueLTStd-Hv'
      : 'HelveticaNeueLTStd-Hv',
  secondaryBold:
    Platform.OS === 'android'
      ? 'HelveticaNeueLTStd-Bd'
      : 'HelveticaNeueLTStd-Bd',
};

export default {
  flex,
  colors,
  padding,
  margin,
  fonts,
  dimensions,
  elevation,
  fontFamily,
  size,
  percentage,
};
