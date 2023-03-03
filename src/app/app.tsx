import { exampleMeteomaticsAPI } from '@fedevela-vntr-case/api';
import { Banner } from '@fedevela-vntr-case/common-ui';
//import styles from './app.module.css';

//import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Banner text="Hello World!"></Banner>

      <ul>
        {exampleMeteomaticsAPI.map( (ema) => (
          <li key={ema.id}>
            <strong>{ema.name}</strong> Price: {ema.price}
          </li>
        ) )}
      </ul>
    </>
  );
}

export default App;
