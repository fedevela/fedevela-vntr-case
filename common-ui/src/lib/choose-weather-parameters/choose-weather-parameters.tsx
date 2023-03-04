/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './choose-weather-parameters.module.css';
import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

import TemperatureParameters from '../parameters-temperature/parameters-temperature';

export interface ChooseWeatherParametersProps {
  setGraphIntervalType: (git: string) => void;
  setWeatherParameterStringValue: (psv: string) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
  setWeatherParameterLabel: (git: string) => void;
  weatherParameterLabel: string;
  toast: any;
}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  const {
    setWeatherParameterStringValue,
    setShouldDisableNextButton,
    setGraphIntervalType,
    setWeatherParameterLabel,
    weatherParameterLabel,
    toast,
  } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);

  const weatherParameterLabels: string[] = ['Temperature'];

  return (
    <div className={styles['container']}>
      {weatherParameterLabel.length === 0 ?
      <h3>Please choose the parameter you wish to see:</h3>
      :
      <h3>Please choose values for {weatherParameterLabel} parameter :</h3>
      }
      
      <Accordion
        activeIndex={activeTabIndex}
        onTabChange={(e) => {
          setActiveTabIndex(e.index);
          setWeatherParameterLabel(weatherParameterLabels[e.index]);
          toast.current.show({
            severity: 'info',
            summary: 'Weather Parameter Chosen!',
            detail: weatherParameterLabels[e.index],
          });
        }}
      >
        <AccordionTab header={weatherParameterLabels[0]}>
          <TemperatureParameters
            setWeatherParameterStringValue={setWeatherParameterStringValue}
            setShouldDisableNextButton={setShouldDisableNextButton}
            setGraphIntervalType={setGraphIntervalType}
            toast={toast}
          />
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default ChooseWeatherParameters;
