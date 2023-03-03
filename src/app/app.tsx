import { exampleMeteomaticsAPI } from '@fedevela-vntr-case/api';
import { Banner } from '@fedevela-vntr-case/common-ui';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TabMenu } from 'primereact/tabmenu';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primereact/resources/primereact.min.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'primeicons/primeicons.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrimeIcons } from 'primereact/api';

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any[] = exampleMeteomaticsAPI();
  const items = [{ label: 'Temp', icon: PrimeIcons.SUN }];

  return (
    <>
      <TabMenu model={items} />
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
