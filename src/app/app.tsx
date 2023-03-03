// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/primereact.min.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeicons/primeicons.css';

import { exampleMeteomaticsAPI } from '@fedevela-vntr-case/api';
import { Banner, MenuSteps } from '@fedevela-vntr-case/common-ui';

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any[] = exampleMeteomaticsAPI();

  return (
    <>
      <MenuSteps></MenuSteps>
      <Banner text="Hello World!"></Banner>

      <ul>
        {result.map((ema) => (
          <li key={ema.id}>
            <strong>{ema.name}</strong> Price: {ema.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
