import axios from 'axios';
import mockMeteomaticsData from './api.mock.json';

export const INTERVAL_24H = '24h';
export const INTERVAL_1H = '1h';
export const INTERVAL_P_1H = 'PT1H';
export const INTERVAL_P_24H = 'P1D';

const axiosInstance = axios.create({
  baseURL: 'https://api.meteomatics.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'personal_vela',
    password: 'G8boayH5F6',
  },
  responseType: 'json',
});

export const buildWeatherParameterStringTemperature = (
  measureMMMVP: string,
  levelMetersVP: string,
  intervalHDVP: string,
  unitTemperatureVP: string
) => `t_${measureMMMVP}_${levelMetersVP}m_${intervalHDVP}:${unitTemperatureVP}`;

export const exampleMeteomaticsAPI = () => mockMeteomaticsData;

export const buildMeteomaticsURL = (
  startTime: string,
  endTime: string,
  dateInterval: string,
  weatherParameter: string,
  latitude: string,
  longitude: string
) =>
  `${startTime}--${endTime}:${dateInterval}/${weatherParameter}/${latitude},${longitude}/json?model=mix`;

export const executeRequestMeteomaticsAPI = async (meteomaticsURL: string) =>
  Promise.resolve(axiosInstance.post(meteomaticsURL));
