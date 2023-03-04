import styles from './common-ui.module.css';

/* eslint-disable-next-line */
export interface CommonUiProps {}

export function CommonUi(props: CommonUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonUi!</h1>
    </div>
  );
}

export interface IListBoxItem {
  name: string;
  code: string;
}

export const LEVEL_METERS_MIN = 2;
export const LEVEL_METERS_MAX = 20000;


export interface IValueParameterProps {
  setValueParameter: (vp: string) => void;
}

