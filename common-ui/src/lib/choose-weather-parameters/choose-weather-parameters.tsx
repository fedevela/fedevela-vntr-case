import styles from './choose-weather-parameters.module.css';

/* eslint-disable-next-line */
export interface ChooseWeatherParametersProps {}

export function ChooseWeatherParameters(props: ChooseWeatherParametersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ChooseWeatherParameters!</h1>
    </div>
  );
}

export default ChooseWeatherParameters;
