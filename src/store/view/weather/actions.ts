import { createAction, ActionsUnion } from 'types/store';

import { SetLocationPayload } from './types';

export enum WeatherViewActionTypes {
  SET_LOCATION = '[WEATHER VIEW] SET_LOCATION'
}

export const WeatherViewActions = {
  setLocation: (payload: SetLocationPayload) =>
    createAction(WeatherViewActionTypes.SET_LOCATION, payload)
};

export type WeatherViewActions = ActionsUnion<typeof WeatherViewActions>;
