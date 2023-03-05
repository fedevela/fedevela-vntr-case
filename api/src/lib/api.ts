import axios from 'axios';
import mockMeteomaticsData from './api.mock.json';

export const INTERVAL_1H = '1h';
export const INTERVAL_P_1H = 'PT1H';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Credentials': false,
  },
  withCredentials: false,
  auth: {
    username: 'personal_vela',
    password: 'G8boayH5F6',
  },
  responseType: 'json',
});

export const buildWeatherParameterStringTemperature = (
  measureMMMVP: string,
  levelMetersVP: string,
  unitTemperatureVP: string
) => `t_${measureMMMVP}_${levelMetersVP}m_${INTERVAL_1H}:${unitTemperatureVP}`;

export const buildWeatherParameterStringSpeed = (
  levelMetersVP: string,
  unitSpeedVP: string
) => `wind_speed_mean_${levelMetersVP}m_${INTERVAL_1H}:${unitSpeedVP}`;

export const exampleMeteomaticsAPI = () => mockMeteomaticsData;

export const buildMeteomaticsURL = (
  startTime: string,
  endTime: string,
  weatherParameter: string,
  latitude: string,
  longitude: string
) =>
  `https://corsproxy.io/?https://api.meteomatics.com/${startTime}--${endTime}:${INTERVAL_P_1H}/${weatherParameter}/${latitude},${longitude}/json?model=mix`;

export const executeRequestMeteomaticsAPI = async (meteomaticsURL: string) =>
  Promise.resolve(axiosInstance.post(meteomaticsURL));
