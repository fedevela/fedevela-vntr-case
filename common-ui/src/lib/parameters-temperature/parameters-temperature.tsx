/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './parameters-temperature.module.css';
import { useEffect, useState } from 'react';

import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

import { buildWeatherParameterStringTemperature } from '@fedevela-vntr-case/api';

import ValueParameterLevelMeters from '../value-parameter-level-meters/value-parameter-level-meters';
import ValueParameterMeasureMMM from '../value-parameter-measure-mmm/value-parameter-measure-mmm';
import ValueParameterUnitTemperature from '../value-parameter-unit-temperature/value-parameter-unit-temperature';

export interface TemperatureParametersProps {
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
  toast: any;
}

export function TemperatureParameters(props: TemperatureParametersProps) {
  const {
    setWeatherParameterStringValue,
    setShouldDisableNextButton,
    toast,
  } = props;
  const [parameterStringValueTemperature, setParameterStringValueTemperature] =
    useState<string>('');
  //"t_min_2m_1h:C"
  const [levelMetersVP, setLevelMetersVP] = useState<string>('');
  const [measureMMMVP, setMeasureMMMVP] = useState<string>('');
  const [unitTemperatureVP, setUnitTemperatureVP] = useState<string>('');

  useEffect(() => {
    setWeatherParameterStringValue(parameterStringValueTemperature);
  }, [setWeatherParameterStringValue, parameterStringValueTemperature]);

  useEffect(() => {
    if (
      levelMetersVP !== '' &&
      measureMMMVP !== '' &&
      unitTemperatureVP !== ''
    ) {
      setParameterStringValueTemperature(
        buildWeatherParameterStringTemperature(
          measureMMMVP,
          levelMetersVP,
          unitTemperatureVP
        )
      );
      setShouldDisableNextButton(false);
      toast.current.show({
        severity: 'success',
        summary: 'Weather Parameter Configured!',
        detail: 'The temperature parameter has been configured.',
      });
    }
  }, [
    setParameterStringValueTemperature,
    setShouldDisableNextButton,
    levelMetersVP,
    measureMMMVP,
    unitTemperatureVP,
    toast,
  ]);

  return (
    <div className={styles['container']}>
      <Card>
        <ValueParameterLevelMeters setValueParameter={setLevelMetersVP} />
        <Divider />
        <ValueParameterMeasureMMM setValueParameter={setMeasureMMMVP} />
        <Divider />
        <ValueParameterUnitTemperature
          setValueParameter={setUnitTemperatureVP}
        />
      </Card>
    </div>
  );
}

export default TemperatureParameters;
