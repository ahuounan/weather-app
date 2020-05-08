import { ModelState } from './models/types';
import { ViewState } from './view/types';

export interface RootState {
  models: ModelState;
  view: ViewState;
}
