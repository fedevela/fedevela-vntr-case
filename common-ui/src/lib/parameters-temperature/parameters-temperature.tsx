/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './parameters-temperature.module.css';

import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

import ValueParameterLevelMeters from '../value-parameter-level-meters/value-parameter-level-meters';
import ValueParameterMeasureMMM from '../value-parameter-measure-mmm/value-parameter-measure-mmm';
import ValueParameterIntervalHD from '../value-parameter-interval-hd/value-parameter-interval-hd';
import ValueParameterUnitTemperature from '../value-parameter-unit-temperature/value-parameter-unit-temperature';

/* eslint-disable-next-line */
export interface TemperatureParametersProps {}

export function TemperatureParameters(props: TemperatureParametersProps) {
  return (
    <div className={styles['container']}>
      <Card>
        <ValueParameterLevelMeters />
        <Divider />
        <ValueParameterMeasureMMM />
        <Divider />
        <ValueParameterIntervalHD />
        <Divider />
        <ValueParameterUnitTemperature />
      </Card>
      <p className="m-0">"t_min_2m_1h:C"</p>
    </div>
  );
}

export default TemperatureParameters;
