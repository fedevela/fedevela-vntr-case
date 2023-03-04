import styles from './choose-graph-plot-type.module.css';
import { useEffect, useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { PrimeIcons } from 'primereact/api';

import { IListBoxItem } from '../common-ui';

export interface ChooseGraphPlotTypeProps {
  setGraphPlotType: (gpt: string) => void;
  setShouldDisableGraphButton: (gpt: boolean) => void;
}

export function ChooseGraphPlotType(props: ChooseGraphPlotTypeProps) {
  const { setGraphPlotType, setShouldDisableGraphButton } = props;
  const [valueGraphPlotType, setValueGraphPlotType] = useState<string>('');
  const availableGraphPlotTypes: IListBoxItem[] = [
    { name: 'Heat Map', code: 'heatmap', icon: PrimeIcons.QRCODE },
    { name: 'Line', code: 'line', icon: PrimeIcons.CHART_LINE },
    // { name: 'Bars', code: 'bar', icon: PrimeIcons.CHART_BAR },
  ];

  useEffect(() => {
    setGraphPlotType(valueGraphPlotType);
    setShouldDisableGraphButton(false);
  }, [valueGraphPlotType, setGraphPlotType, setShouldDisableGraphButton]);

  const itemTemplateWithIcon = (option: IListBoxItem) => {
    return (
      <>
        <i className={option.icon}></i>
        <span>&nbsp;{option.name}</span>
      </>
    );
  };

  return (
    <div>
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
        className="w-full"
      />
    </div>
  );
}

export default ChooseGraphPlotType;
