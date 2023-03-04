/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';
import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

import TemperatureParameters from '../parameters-temperature/parameters-temperature';

export interface ChooseWeatherParametersProps {
  setGraphIntervalType: (git: string) => void;
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const {
    setWeatherParameterStringValue,
    setShouldDisableNextButton,
    setGraphIntervalType,
  } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);

  return (
    <div className={styles['container']}>
      <h3>Please choose the parameter you wish to see:</h3>
      <Accordion
        activeIndex={activeTabIndex}
        onTabChange={(e) => setActiveTabIndex(e.index)}
      >
        <AccordionTab header="Temperature">
          <TemperatureParameters
            setWeatherParameterStringValue={setWeatherParameterStringValue}
            setShouldDisableNextButton={setShouldDisableNextButton}
            setGraphIntervalType={setGraphIntervalType}
          />
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default ChooseWeatherParameters;
