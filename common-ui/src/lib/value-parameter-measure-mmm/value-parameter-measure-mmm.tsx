/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-measure-mmm.module.css';
import { useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { IListBoxItem } from '../common-ui';

/* eslint-disable-next-line */
export interface ValueParameterMeasureMMMProps {}

export function ValueParameterMeasureMMM(props: ValueParameterMeasureMMMProps) {
  const [valueMeasureMMM, setValueMeasureMMM] = useState<IListBoxItem | null>(
    null
  );
  const availableMeasuresMMM: IListBoxItem[] = [
    { name: 'Min', code: 'min' },
    { name: 'Mean', code: 'mean' },
    { name: 'Max', code: 'max' },
  ];
  
  return (
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
  );
}

export default ValueParameterMeasureMMM;
