/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';

import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Divider } from 'primereact/divider';

import ParametersTemperature from '../parameters-temperature/parameters-temperature';
import {
  weatherParametersKV,
  IListBoxItem,
  itemTemplateWithIcon,
} from '../common-ui';
import ParametersWindSpeed from '../parameters-wind-speed/parameters-wind-speed';

export interface ChooseWeatherParametersProps {
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
  setWeatherParameterCode: (git: string) => void;
  weatherParameterCode: string;
  shouldDisableNextButton: boolean;
  toast: any;
}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const {
    setWeatherParameterStringValue,
    setShouldDisableNextButton,
    setWeatherParameterCode,
    weatherParameterCode,
    shouldDisableNextButton,
    toast,
  } = props;

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
                <ParametersTemperature
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
            return (
              <>
                <Divider />
                <ParametersWindSpeed
                  setWeatherParameterStringValue={
                    setWeatherParameterStringValue
                  }
                  setShouldDisableNextButton={setShouldDisableNextButton}
                  shouldDisableNextButton={shouldDisableNextButton}
                  toast={toast}
                />
              </>
            );
          case weatherParametersKV.relative_humidity.code:
            return <div>relative_humidity</div>;
        }
      })()}
    </div>
  );
}

export default ChooseWeatherParameters;
