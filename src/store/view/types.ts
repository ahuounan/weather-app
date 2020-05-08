import { QueryState } from './query/types';
import { LocationState } from './location/types';
import { SettingsState } from './settings/types';

export interface ViewState {
  query: QueryState;
  location: LocationState;
  settings: SettingsState;
}
