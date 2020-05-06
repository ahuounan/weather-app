import { takeLatest, select } from 'typed-redux-saga';

import { storage } from 'services';
import { SettingsActionTypes } from './actions';
import { selectors } from 'store/selectors';

function* handleSettingChange() {
  const settings = yield* select(selectors.view.settings.getState);

  storage.settings.set(settings);
}

export const SettingsSagas = [
  takeLatest(
    [
      SettingsActionTypes.CHANGE_DATA_SERIES,
      SettingsActionTypes.CHANGE_UNIT,
      SettingsActionTypes.TOGGLE_DATA_POINT
    ],
    handleSettingChange
  )
];
