import styles from './menu-steps.module.css';
import React, { useState, useRef } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Steps } from 'primereact/steps';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import ChooseLocation from '../choose-location/choose-location';

/* eslint-disable-next-line */
export interface MenuStepsProps {}

export function MenuSteps(props: MenuStepsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toast = useRef(null);
  const items: MenuItem = [
    {
      label: 'Location',
      command: (event) => {
        toast?.current?.show({
          severity: 'info',
          summary: 'First:',
          detail: 'Please choose a location!',
        });
      },
    },
    {
      label: 'Seat',
      command: (event) => {
        toast?.current?.show({
          severity: 'info',
          summary: 'Second Step',
          detail: event.item.label,
        });
      },
    },
    {
      label: 'Payment',
      command: (event) => {
        toast?.current?.show({
          severity: 'info',
          summary: 'Third Step',
          detail: event.item.label,
        });
      },
    },
    {
      label: 'Confirmation',
      command: (event) => {
        toast?.current?.show({
          severity: 'info',
          summary: 'Last Step',
          detail: event.item.label,
        });
      },
    },
  ];
  return (
    <div className={styles['container']}>
      <div className="card">
        <Toast ref={toast}></Toast>
        <Steps
          model={items}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
        />{' '}
        {(() => {
          switch (activeIndex) {
            case 0:
              return <ChooseLocation></ChooseLocation>;
            case 1:
              return <div>one</div>;
            case 2:
              return <div>two</div>;
            case 3:
              return <div>three</div>;
            case 4:
              return <div>four</div>;
            default:
              return <div>NULL</div>;
          }
        })()}
      </div>
    </div>
  );
}

export default MenuSteps;
