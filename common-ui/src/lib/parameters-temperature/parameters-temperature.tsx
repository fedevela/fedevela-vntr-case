/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './parameters-temperature.module.css';
import { useEffect, useState } from 'react';

import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

import ValueParameterLevelMeters from '../value-parameter-level-meters/value-parameter-level-meters';
import ValueParameterMeasureMMM from '../value-parameter-measure-mmm/value-parameter-measure-mmm';
import ValueParameterIntervalHD from '../value-parameter-interval-hd/value-parameter-interval-hd';
import ValueParameterUnitTemperature from '../value-parameter-unit-temperature/value-parameter-unit-temperature';

export interface TemperatureParametersProps {
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
}

export function TemperatureParameters(props: TemperatureParametersProps) {
  const { setWeatherParameterStringValue, setShouldDisableNextButton } = props;
  const [parameterStringValueTemperature, setParameterStringValueTemperature] =
    useState<string>('');
  //"t_min_2m_1h:C"
  const [levelMetersVP, setLevelMetersVP] = useState<string>('');
  const [measureMMMVP, setMeasureMMMVP] = useState<string>('');
  const [intervalHDVP, setIntervalHDVP] = useState<string>('');
  const [unitTemperatureVP, setUnitTemperatureVP] = useState<string>('');

  useEffect(() => {
    setWeatherParameterStringValue(parameterStringValueTemperature);
  }, [setWeatherParameterStringValue, parameterStringValueTemperature]);

  useEffect(() => {
    setParameterStringValueTemperature(
      `t_${measureMMMVP}_${levelMetersVP}_${intervalHDVP}:${unitTemperatureVP}`
    );
    if (
      levelMetersVP !== '' &&
      measureMMMVP !== '' &&
      intervalHDVP !== '' &&
      unitTemperatureVP !== ''
    )
      setShouldDisableNextButton(false);
  }, [
    setParameterStringValueTemperature,
    setShouldDisableNextButton,
    levelMetersVP,
    measureMMMVP,
    intervalHDVP,
    unitTemperatureVP,
  ]);

  return (
    <div className={styles['container']}>
      <Card>
        <ValueParameterLevelMeters setValueParameter={setLevelMetersVP} />
        <Divider />
        <ValueParameterMeasureMMM setValueParameter={setMeasureMMMVP} />
        <Divider />
        <ValueParameterIntervalHD setValueParameter={setIntervalHDVP} />
        <Divider />
        <ValueParameterUnitTemperature
          setValueParameter={setUnitTemperatureVP}
        />
      </Card>
    </div>
  );
}

export default TemperatureParameters;
