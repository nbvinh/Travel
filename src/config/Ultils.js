import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleW = size => shortDimension / guidelineBaseWidth * size;
export const verticalScaleH = size => longDimension / guidelineBaseHeight * size;
export const moderateScaleW = (size, factor = 0.5) => size + (scaleW(size) - size) * factor;
export const moderateVerticalScaleH = (size, factor = 0.5) => size + (verticalScaleH(size) - size) * factor;
export const s = scaleW;
export const vs = verticalScaleH;
export const ms = moderateScaleW;
export const mvs = moderateVerticalScaleH;