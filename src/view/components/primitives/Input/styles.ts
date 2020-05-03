import { InputType } from './types';
import { Theme } from 'view/theme/types';
import { makeRem } from 'view/theme/utils';

export const buildStyles = (theme: Theme) => ({
  default: {
    fontFamily: theme.font.family,
    fontSize: makeRem(theme.scale[3])
  },
  [InputType.BUTTON]: {},
  [InputType.SUBMIT]: {},
  [InputType.CHECKBOX]: {},
  [InputType.RADIO]: {},
  [InputType.TEXT]: {}
});
