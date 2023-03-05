/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';
import { useState } from 'react';

import { PrimeIcons } from 'primereact/api';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Divider } from 'primereact/divider';

import TemperatureParameters from '../parameters-temperature/parameters-temperature';
import { IKeyValueMap, IListBoxItem, itemTemplateWithIcon } from '../common-ui';

export interface ChooseWeatherParametersProps {
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
  setWeatherParameterLabel: (git: string) => void;
  weatherParameterLabel: string;
  shouldDisableNextButton: boolean;
  toast: any;
}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const {
    setWeatherParameterStringValue,
    setShouldDisableNextButton,
    setWeatherParameterLabel,
    shouldDisableNextButton,
    weatherParameterLabel,
    toast,
  } = props;
  const [weatherParameterCode, setWeatherParameterCode] = useState<string>('');

  const weatherParametersKV: IKeyValueMap = {
    temperature: {
      name: 'Temperature',
      code: 'temperature',
      icon: PrimeIcons.SUN,
    },
    precipitation: {
      name: 'Precipitation',
      code: 'precipitation',
      icon: PrimeIcons.CLOUD_DOWNLOAD,
    },
    wind_speed: {
      name: 'Wind Speed',
      code: 'wind_speed',
      icon: PrimeIcons.IMAGE,
    },
    relative_humidity: {
      name: 'Relative Humidity',
      code: 'relative_humidity',
      icon: PrimeIcons.SORT_ALT,
    },
  };

  const availableWeatherParameterTypes: IListBoxItem[] = [
    ...Object.values(weatherParametersKV),
  ];

  return (
    <div className={styles['container']}>
      <h3>Please choose the parameter you wish to see:</h3>

      <SelectButton
        value={weatherParameterCode}
        onChange={(e: SelectButtonChangeEvent) => {
          setWeatherParameterCode(e.value);
          setWeatherParameterLabel(weatherParametersKV[e.value].name);
          toast.current.show({
            severity: 'success',
            summary: 'Weather Parameter Chosen!',
            detail: weatherParametersKV[e.value].name,
          });
        }}
        options={availableWeatherParameterTypes}
        itemTemplate={itemTemplateWithIcon}
        optionLabel="name"
        optionValue="code"
        className="w-full"
      />
      {(() => {
        switch (weatherParameterCode) {
          case weatherParametersKV.temperature.code:
            return (
              <>
                <Divider />
                <TemperatureParameters
                  setWeatherParameterStringValue={
                    setWeatherParameterStringValue
                  }
                  setShouldDisableNextButton={setShouldDisableNextButton}
                  shouldDisableNextButton={shouldDisableNextButton}
                  toast={toast}
                />
              </>
            );
          case weatherParametersKV.precipitation.code:
            return <div>precipitation</div>;
          case weatherParametersKV.wind_speed.code:
            return <div>wind_speed</div>;
          case weatherParametersKV.relative_humidity.code:
            return <div>relative_humidity</div>;
        }
      })()}
    </div>
  );
}

export default ChooseWeatherParameters;
