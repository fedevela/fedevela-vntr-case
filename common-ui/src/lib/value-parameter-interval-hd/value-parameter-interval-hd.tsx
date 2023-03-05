/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-interval-hd.module.css';
import { useEffect, useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { IListBoxItem, IValueParameterProps } from '../common-ui';
import { INTERVAL_1H, INTERVAL_24H } from '@fedevela-vntr-case/api';

export function ValueParameterIntervalHD(props: IValueParameterProps) {
  const { setValueParameter } = props;
  const [valueIntervalHD, setValueIntervalHD] = useState<string>('');

  const availableIntervalsHD: IListBoxItem[] = [
    { name: 'Hourly', code: INTERVAL_1H },
    { name: 'Daily', code: INTERVAL_24H },
  ];

  useEffect(() => {
    setValueParameter(valueIntervalHD);
  }, [valueIntervalHD, setValueParameter]);

  return (
    <div className="field">
      <label>Interval: </label>
      <SelectButton
        value={valueIntervalHD}
        onChange={(e: SelectButtonChangeEvent) => {
          setValueIntervalHD(e.value);
        }}
        options={availableIntervalsHD}
        optionLabel="name"
        optionValue="code"
        className="w-full md:w-14rem"
      />
    </div>
  );
}

export default ValueParameterIntervalHD;
