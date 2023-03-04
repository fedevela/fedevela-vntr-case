/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './parameters-temperature.module.css';
import { useState } from 'react';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

import { IListBoxItem, LEVEL_METERS_MAX, LEVEL_METERS_MIN } from '../common-ui';

/* eslint-disable-next-line */
export interface TemperatureParametersProps {}

export function TemperatureParameters(props: TemperatureParametersProps) {
  const [valueLevelMeters, setValueLevelMeters] = useState<number>(1000);
  const [valueMeasureMMM, setValueMeasureMMM] = useState<IListBoxItem | null>(
    null
  );
  const [valueIntervalHD, setValueIntervalHD] = useState<IListBoxItem | null>(
    null
  );
  const [valueUnitTemperature, setValueUnitTemperature] =
    useState<IListBoxItem | null>(null);

  const availableMeasuresMMM: IListBoxItem[] = [
    { name: 'Min', code: 'min' },
    { name: 'Mean', code: 'mean' },
    { name: 'Max', code: 'max' },
  ];
  const availableIntervalsHD: IListBoxItem[] = [
    { name: 'Hourly', code: '1h' },
    { name: 'Daily', code: '24h' },
  ];
  const availableUnitsTemperature: IListBoxItem[] = [
    { name: 'C', code: 'C' },
    { name: 'F', code: 'F' },
    { name: 'K', code: 'K' },
  ];

  return (
    <div className={styles['container']}>
      <Card>
        <div className="field">
          <label>Level (Meters): {valueLevelMeters} m</label>
          <Slider
            value={valueLevelMeters}
            onChange={(e: SliderChangeEvent) => setValueLevelMeters(e.value)}
            min={LEVEL_METERS_MIN}
            max={LEVEL_METERS_MAX}
            className="w-full"
          />
        </div>
        <Divider></Divider>
        <div className="field">
          <label>Measure: </label>
          <SelectButton
            value={valueMeasureMMM}
            onChange={(e: SelectButtonChangeEvent) =>
              setValueMeasureMMM(e.value)
            }
            options={availableMeasuresMMM}
            optionLabel="name"
            optionValue="code"
            className="w-full md:w-14rem"
          />
        </div>
        <Divider></Divider>
        <div className="field">
          <label>Interval: </label>
          <SelectButton
            value={valueIntervalHD}
            onChange={(e: SelectButtonChangeEvent) =>
              setValueIntervalHD(e.value)
            }
            options={availableIntervalsHD}
            optionLabel="name"
            optionValue="code"
            className="w-full md:w-14rem"
          />
        </div>
        <Divider></Divider>
        <div className="field">
          <label>Unit: </label>
          <SelectButton
            value={valueUnitTemperature}
            onChange={(e: SelectButtonChangeEvent) =>
              setValueUnitTemperature(e.value)
            }
            options={availableUnitsTemperature}
            optionLabel="name"
            optionValue="code"
            className="w-full md:w-14rem"
          />
        </div>
      </Card>
      <p className="m-0">"t_min_2m_1h:C"</p>
    </div>
  );
}

export default TemperatureParameters;
