import { DataState } from './data/types';
import { SettingsState } from './view/settings/types';
import { ViewState } from './view/types';

export interface RootState {
  settings: SettingsState;
  data: DataState;
  view: ViewState;
}
