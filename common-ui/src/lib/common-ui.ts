export const LEVEL_METERS_MIN = 2;
export const LEVEL_METERS_MAX = 20000;
export const DATE_ZERO = new Date(0);

export interface IListBoxItem {
  name: string;
  code: string;
  icon?: string;
}

export interface IGraphDataPoint {
  year: number;
  month: number;
  date: number;
  hour: number;
  value: number;
  ymdLabel?: string;
  hLabel?: string;
}

export interface IKeyValueMap {
  [key: string]: string;
}

export interface IGroupedValuesMap {
  [key: string]: number[];
}

export interface IValueParameterProps {
  setValueParameter: (vp: string) => void;
}

export const checkDateIsNotZero = (aDate: Date) =>
  aDate.toUTCString() !== DATE_ZERO.toUTCString();

export const createArray24HLabels = () => {
  return new Array(24).fill(0).map((_, i) => `${i}h`);
};
