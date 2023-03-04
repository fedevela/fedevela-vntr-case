/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-interval-hd.module.css';
import { useEffect, useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { IListBoxItem, IValueParameterProps } from '../common-ui';

export function ValueParameterIntervalHD(props: IValueParameterProps) {
  const { setValueParameter } = props;
  const [valueIntervalHD, setValueIntervalHD] = useState<string>('');

  const availableIntervalsHD: IListBoxItem[] = [
    { name: 'Hourly', code: '1h' },
    { name: 'Daily', code: '24h' },
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
