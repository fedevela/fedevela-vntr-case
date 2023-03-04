/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';
import { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Card } from 'primereact/card';

interface IListBoxItem {
  name: string;
  code: string;
}

/* eslint-disable-next-line */
export interface ChooseWeatherParametersProps {}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

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

  // useEffect(() => {
  //   console.log(`activeTabIndex : ${activeTabIndex}`);
  // }, [activeTabIndex]);
  // useEffect(() => {
  //   console.log(`value : ${value}`);
  // }, [value]);

  return (
    <div className={styles['container']}>
      <Accordion
        activeIndex={activeTabIndex}
        onTabChange={(e) => setActiveTabIndex(e.index)}
      >
        <AccordionTab header="Temperature Parameter">
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
                onChange={(e: SelectButtonChangeEvent) =>
                  setValueMeasure(e.value)
                }
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
                onChange={(e: SelectButtonChangeEvent) =>
                  setValueInterval(e.value)
                }
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
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default ChooseWeatherParameters;
