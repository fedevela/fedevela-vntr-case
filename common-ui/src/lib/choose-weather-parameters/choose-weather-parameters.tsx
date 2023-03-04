/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';
import { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

import TemperatureParameters from '../temperature-parameters/temperature-parameters';


/* eslint-disable-next-line */
export interface ChooseWeatherParametersProps {}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);


  return (
    <div className={styles['container']}>
      <h2>Please choose the parameter you wish to see:</h2>
      <Accordion
        activeIndex={activeTabIndex}
        onTabChange={(e) => setActiveTabIndex(e.index)}
      >
        <AccordionTab header="Temperature">
          <TemperatureParameters></TemperatureParameters>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default ChooseWeatherParameters;
