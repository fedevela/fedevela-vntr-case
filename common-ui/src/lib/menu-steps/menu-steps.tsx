import styles from './menu-steps.module.css';
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import { Card } from 'primereact/card';
import ChooseLocation from '../choose-location/choose-location';

import { Button } from 'primereact/button';

/* eslint-disable-next-line */
export interface MenuStepsProps {}

export function MenuSteps(props: MenuStepsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toast = useRef(null);
  const items: MenuItem = [
    {
      label: 'Location',
      disabled: false,
      // command: (event) => {
      //   toast?.current?.show({
      //     severity: 'info',
      //     summary: 'First:',
      //     detail: 'Please choose a location!',
      //   });
      // },
    },
    {
      label: 'Seat',
      disabled: activeIndex < 1,
    },
    {
      label: 'Payment',
      disabled: activeIndex < 2,
    },
    {
      label: 'Confirmation',
      disabled: activeIndex < 3,
    },
  ];
  return (
    <div className={styles['container']}>
      <Toast ref={toast}></Toast>
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Card>
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

        <div className="formgrid grid">
          <div className="field col">
            <div className="card flex justify-content-center">
              {activeIndex > 0 && <Button label="<< Previous" />}
            </div>
          </div>
          <div className="field col">
            <div className="card flex justify-content-center">
              {activeIndex < 3 && <Button label="Next >>" />}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MenuSteps;
