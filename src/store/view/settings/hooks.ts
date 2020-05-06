import { useSelector } from 'react-redux';

import { TemperatureUnit } from 'models/settings';

import { settingsSelectors } from './selectors';

const convertKelvinToKelvin = (temp: number) => `${temp.toFixed(0)}°K`;
const convertKelvinToCelsius = (temp: number) => `${(temp - 273.15).toFixed(0)}°C`;
const convertKelvinToFahrenheit = (temp: number) =>
  `${(((temp - 273.15) * 9) / 5 + 32).toFixed(0)}°F`;

export const useConvertTemperature = () => {
  const unit = useSelector(settingsSelectors.getTemperatureUnit);
  switch (unit) {
    case TemperatureUnit.KELVIN: {
      return convertKelvinToKelvin;
    }
    case TemperatureUnit.CELSIUS: {
      return convertKelvinToCelsius;
    }
    case TemperatureUnit.FAHRENHEIT: {
      return convertKelvinToFahrenheit;
    }
  }
};
