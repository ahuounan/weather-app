import { DataState } from './data/types';
import { ViewState } from './view/types';

export interface RootState {
  data: DataState;
  view: ViewState;
}
