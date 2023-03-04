// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/primereact.min.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeicons/primeicons.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeflex/primeflex.css';

import {
  exampleMeteomaticsAPI,
  IAddressComponent,
} from '@fedevela-vntr-case/api';
import { MenuSteps } from '@fedevela-vntr-case/common-ui';
import { useEffect, useState } from 'react';

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const result: any[] = exampleMeteomaticsAPI();
  const [startDate, setStartDate] = useState(new Date(0));
  const [endDate, setEndDate] = useState(new Date(0));
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [weatherParameterStringValue, setWeatherParameterStringValue] = useState<string>('');
  const [addressComponents, setAddressComponents] = useState<
    IAddressComponent[] | []
  >([]);

  const onChangeAddressComponents = (acs: IAddressComponent[]) =>
    setAddressComponents([...acs]);

  // useEffect(() => {
  //   console.log(`latitude : ${latitude}`);
  // }, [latitude]);
  // useEffect(() => {
  //   console.log(`longitude : ${longitude}`);
  // }, [longitude]);
  // useEffect(() => {
  //   console.log(`addressComponents : ${JSON.stringify(addressComponents)}`);
  // }, [addressComponents]);
  // useEffect(() => {
  //   console.log(`startDate : ${startDate.toUTCString()}`);
  // }, [startDate]);
  // useEffect(() => {
  //   console.log(`endDate : ${endDate.toUTCString()}`);
  // }, [endDate]);

  return (
    <>
      <MenuSteps
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        onChangeAddressComponents={onChangeAddressComponents}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setWeatherParameterStringValue={setWeatherParameterStringValue}
      ></MenuSteps>
      <p className="m-0">{weatherParameterStringValue}</p>
      {/* <Banner text="Hello World!"></Banner>

      <ul>
        {result.map((ema) => (
          <li key={ema.id}>
            <strong>{ema.name}</strong> Price: {ema.price}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
