/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './temperature-parameters.module.css';
import { useState } from 'react';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Card } from 'primereact/card';

interface IListBoxItem {
  name: string;
  code: string;
}

/* eslint-disable-next-line */
export interface TemperatureParametersProps {}

export function TemperatureParameters(props: TemperatureParametersProps) {
  const [valueLevel, setValueLevel] = useState<number>(1000);
  const [valueMeasure, setValueMeasure] = useState<IListBoxItem | null>(null);
  const [valueInterval, setValueInterval] = useState<IListBoxItem | null>(null);
  const [valueUnit, setValueUnit] = useState<IListBoxItem | null>(null);

  const availableMeasures: IListBoxItem[] = [
    { name: 'Min', code: 'min' },
    { name: 'Mean', code: 'mean' },
    { name: 'Max', code: 'max' },
  ];
  const availableIntervals: IListBoxItem[] = [
    { name: 'Hourly', code: '1h' },
    { name: 'Daily', code: '24h' },
  ];
  const availableUnits: IListBoxItem[] = [
    { name: 'C', code: 'C' },
    { name: 'F', code: 'F' },
    { name: 'K', code: 'K' },
  ];

  return (
    <div className={styles['container']}>
      <Card>
        <div className="field">
          <label>Choose Level (Meters): {valueLevel} m</label>{' '}
          <Slider
            value={valueLevel}
            onChange={(e: SliderChangeEvent) => setValueLevel(e.value)}
            min={2}
            max={2000}
            className="w-full"
          />
        </div>
      </Card>
      <Card>
        <div className="field">
          <label>Choose Measure: </label>{' '}
          <SelectButton
            value={valueMeasure}
            onChange={(e: SelectButtonChangeEvent) => setValueMeasure(e.value)}
            options={availableMeasures}
            optionLabel="name"
            optionValue="code"
            className="w-full md:w-14rem"
          />
        </div>
      </Card>
      <Card>
        <div className="field">
          <label>Choose Interval: </label>{' '}
          <SelectButton
            value={valueInterval}
            onChange={(e: SelectButtonChangeEvent) => setValueInterval(e.value)}
            options={availableIntervals}
            optionLabel="name"
            optionValue="code"
            className="w-full md:w-14rem"
          />
        </div>
      </Card>
      <Card>
        <div className="field">
          <label>Choose Unit: </label>{' '}
          <SelectButton
            value={valueUnit}
            onChange={(e: SelectButtonChangeEvent) => setValueUnit(e.value)}
            options={availableUnits}
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
