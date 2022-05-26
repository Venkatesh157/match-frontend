import Pixels from "./pixels";
import Color from "./colors";
import fonts from "./font";

const typography = {
  "heading-1": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.md,
    fontSize: Pixels.fontSize.lg,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.bold,
  },
  "heading-2": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.sm,
    fontSize: Pixels.fontSize.md,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.bold,
  },

  "bodyText-b": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.xxs,
    fontSize: Pixels.fontSize.sm,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.bold,
  },
  "bodyText-b-1": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.sm,
    fontSize: Pixels.fontSize.sm,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.bold,
  },
  "bodyText-m": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.sm,
    fontSize: Pixels.fontSize.sm,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.regular,
  },
  "caption-m": {
    color: Color.blue.shade0,
    lineHeight: Pixels.lineHeight.xxxs,
    fontSize: Pixels.fontSize.xs,
    fontFamily: fonts.Roboto.name,
    fontWeight: fonts.Roboto.weight.regular,
  },
};

export default typography;
