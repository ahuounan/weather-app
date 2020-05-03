import { Theme } from 'view/theme/types';

import { TextType } from './types';
import { makeRem } from 'view/theme/utils';

export const buildStyles = (theme: Theme) => ({
  default: {
    margin: 0,
    fontFamily: theme.font.family
  },
  [TextType.HEADER]: {
    fontSize: makeRem(theme.scale[7])
  },
  [TextType.SUBHEADER]: {
    fontSize: makeRem(theme.scale[5])
  },
  [TextType.BODY]: {
    fontSize: makeRem(theme.scale[3])
  }
});
