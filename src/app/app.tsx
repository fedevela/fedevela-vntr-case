// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/primereact.min.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeicons/primeicons.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeflex/primeflex.css';

import { exampleMeteomaticsAPI } from '@fedevela-vntr-case/api';
import { Banner, MenuSteps } from '@fedevela-vntr-case/common-ui';
import { useEffect, useState } from 'react';

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const result: any[] = exampleMeteomaticsAPI();
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  useEffect(() => {
    console.log(`latitude : ${latitude}`);
  }, [latitude]);
  useEffect(() => {
    console.log(`longitude : ${longitude}`);
  }, [longitude]);

  return (
    <>
      <MenuSteps
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      ></MenuSteps>
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
