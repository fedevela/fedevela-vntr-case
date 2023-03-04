/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-interval-hd.module.css';
import { useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { IListBoxItem } from '../common-ui';

/* eslint-disable-next-line */
export interface ValueParameterIntervalHDProps {}

export function ValueParameterIntervalHD(props: ValueParameterIntervalHDProps) {
  const availableIntervalsHD: IListBoxItem[] = [
    { name: 'Hourly', code: '1h' },
    { name: 'Daily', code: '24h' },
  ];
  const [valueIntervalHD, setValueIntervalHD] = useState<IListBoxItem | null>(
    null
  );
  return (
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
  );
}

export default ValueParameterIntervalHD;
