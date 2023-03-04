/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-unit-temperature.module.css';
import { useState } from 'react';
import { IListBoxItem } from '../common-ui';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

/* eslint-disable-next-line */
export interface ValueParameterUnitTemperatureProps {}

export function ValueParameterUnitTemperature(
  props: ValueParameterUnitTemperatureProps
) {
  
  const [valueUnitTemperature, setValueUnitTemperature] =
    useState<IListBoxItem | null>(null);

  const availableUnitsTemperature: IListBoxItem[] = [
    { name: 'C', code: 'C' },
    { name: 'F', code: 'F' },
    { name: 'K', code: 'K' },
  ];
  return (
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
  );
}

export default ValueParameterUnitTemperature;
