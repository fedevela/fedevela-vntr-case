/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './menu-steps.module.css';

import { useState, useRef } from 'react';

import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { PrimeIcons } from 'primereact/api';

import ChooseLocation from '../choose-location/choose-location';
import ChooseDateTimeRange from '../choose-date-time-range/choose-date-time-range';

import { IAddressComponent } from '@fedevela-vntr-case/api';
import ChooseWeatherParameters from '../choose-weather-parameters/choose-weather-parameters';
import ChooseGraphPlotType from '../choose-graph-plot-type/choose-graph-plot-type';

export interface MenuStepsProps {
  setGraphPlotType: (gpt: string) => void;
  setGraphIntervalType: (git: string) => void;
  setWeatherParameterStringValue: (psv: string) => void;
  setStartDate: (sd: Date) => void;
  setEndDate: (ed: Date) => void;
  onChangeAddressComponents: (acs: IAddressComponent[]) => void;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export function MenuSteps(props: MenuStepsProps) {
  const {
    setLatitude,
    setLongitude,
    onChangeAddressComponents,
    setStartDate,
    setEndDate,
    setWeatherParameterStringValue,
    setGraphIntervalType,
    setGraphPlotType,
  } = props;
  const [shouldDisableNextButton, setShouldDisableNextButton] =
    useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toast = useRef(null);
  const items: MenuItem = [
    {
      label: 'Location',
      icon: PrimeIcons.COMPASS,
      // disabled: false,
    },
    {
      label: 'Date and Time',
      icon: PrimeIcons.CALENDAR,
      // disabled: activeIndex < 1,
    },
    {
      label: 'Weather Parameters',
      icon: PrimeIcons.BOLT,
      // disabled: activeIndex < 2,
    },
    {
      label: 'Graph Type',
      icon: PrimeIcons.CHART_LINE,
      // disabled: activeIndex < 3,
    },
  ];
  return (
    <div className={styles['container']}>
      <Toast ref={toast} />
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Divider />
      <Card>
        {(() => {
          switch (activeIndex) {
            case 0:
              return (
                <ChooseLocation
                  setLatitude={setLatitude}
                  setLongitude={setLongitude}
                  onChangeAddressComponents={onChangeAddressComponents}
                  setShouldDisableNextButton={setShouldDisableNextButton}
                />
              );
            case 1:
              return (
                <ChooseDateTimeRange
                  setShouldDisableNextButton={setShouldDisableNextButton}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              );
            case 2:
              return (
                <ChooseWeatherParameters
                  setWeatherParameterStringValue={
                    setWeatherParameterStringValue
                  }
                  setShouldDisableNextButton={setShouldDisableNextButton}
                  setGraphIntervalType={setGraphIntervalType}
                />
              );
            case 3:
              return (
                <ChooseGraphPlotType
                  setGraphPlotType={setGraphPlotType}
                />
              );
            default:
              return <div>NULL</div>;
          }
        })()}

        <Divider />
        <div className="formgrid grid">
          <div className="field col">
            <div className="card flex justify-content-center">
              {activeIndex > 0 && (
                <Button
                  label="<< Previous"
                  onClick={() => setActiveIndex(activeIndex - 1)}
                />
              )}
            </div>
          </div>
          <div className="field col">
            <div className="card flex justify-content-center">
              {activeIndex < 3 && (
                <Button
                  disabled={shouldDisableNextButton}
                  label="Next >>"
                  onClick={() => {
                    setActiveIndex(activeIndex + 1);
                    setShouldDisableNextButton(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MenuSteps;
