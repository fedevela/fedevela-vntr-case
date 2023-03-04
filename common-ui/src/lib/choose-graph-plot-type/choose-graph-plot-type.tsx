import styles from './choose-graph-plot-type.module.css';
import { useEffect, useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { PrimeIcons } from 'primereact/api';

import { IListBoxItem } from '../common-ui';

export interface ChooseGraphPlotTypeProps {
  setGraphPlotType: (gpt: string) => void;
}

export function ChooseGraphPlotType(props: ChooseGraphPlotTypeProps) {
  const { setGraphPlotType } = props;
  const [valueGraphPlotType, setValueGraphPlotType] = useState<string>('');
  const availableGraphPlotTypes: IListBoxItem[] = [
    { name: 'Heat Map', code: 'heatmap', icon: PrimeIcons.QRCODE },
    { name: 'Line', code: 'line', icon: PrimeIcons.CHART_LINE },
  ];

  useEffect(() => {
    setGraphPlotType(valueGraphPlotType);
  }, [valueGraphPlotType, setGraphPlotType]);

  const itemTemplateWithIcon = (option: IListBoxItem) => {
    return (
      <>
        <i className={option.icon}></i>
        <span>&nbsp;{option.name}</span>
      </>
    );
  };

  return (
    <div className={styles['container']}>
      <label>Graph Type: </label>
      <SelectButton
        value={valueGraphPlotType}
        onChange={(e: SelectButtonChangeEvent) => {
          setValueGraphPlotType(e.value);
        }}
        options={availableGraphPlotTypes}
        itemTemplate={itemTemplateWithIcon}
        optionLabel="name"
        optionValue="code"
        className="w-full md:w-14rem"
      />
    </div>
  );
}

export default ChooseGraphPlotType;
