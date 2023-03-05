/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Toast } from 'primereact/toast';
import {
  buildMeteomaticsURL,
  executeRequestMeteomaticsAPI,
  INTERVAL_1H,
  INTERVAL_P_1H,
  INTERVAL_P_24H,
} from '@fedevela-vntr-case/api';
import {
  IMeteomaticsAPIDateValue,
  IKeyValueMap,
  DisplayGraph,
  MenuSteps,
  DATE_ZERO,
} from '@fedevela-vntr-case/common-ui';
import { useEffect, useRef, useState } from 'react';

export function App() {
  const toast = useRef(null);
  const [shouldDisplayGraph, setShouldDisplayGraph] = useState(false);
  const [shouldRefreshGraph, setShouldRefreshGraph] = useState(false);
  const [weatherParameterLabel, setWeatherParameterLabel] = useState('');
  const [graphIntervalType, setGraphIntervalType] = useState('');
  const [graphPlotType, setGraphPlotType] = useState('');
  const [startDate, setStartDate] = useState(DATE_ZERO);
  const [endDate, setEndDate] = useState(DATE_ZERO);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [weatherParameterStringValue, setWeatherParameterStringValue] =
    useState<string>('');
  const [addressComponents, setAddressComponents] = useState<
    IKeyValueMap[] | []
  >([]);
  const [meteomaticsAPIDateValues, setMeteomaticsAPIDateValues] = useState<
    IMeteomaticsAPIDateValue[] | []
  >([]);

  const onChangeAddressComponents = (acs: IKeyValueMap[]) =>
    setAddressComponents([...acs]);

  useEffect(() => {
    if (shouldRefreshGraph) {
      const meteomaticsURL = buildMeteomaticsURL(
        startDate.toISOString(),
        endDate.toISOString(),
        graphIntervalType === INTERVAL_1H ? INTERVAL_P_1H : INTERVAL_P_24H,
        weatherParameterStringValue,
        latitude.toLocaleString('en-US', { maximumFractionDigits: 5 }),
        longitude.toLocaleString('en-US', { maximumFractionDigits: 5 })
      );

      executeRequestMeteomaticsAPI(meteomaticsURL)
        .then(function (resultMeteomaticsAPIRaw) {
          setMeteomaticsAPIDateValues(
            resultMeteomaticsAPIRaw.data.data[0].coordinates[0].dates
          );
        })
        .catch(function (error) {
          console.error(error.response);
          toast.current.show({
            severity: 'error',
            summary: 'Error: ' + error.code,
            detail: error.response.data.message,
            life: 3000,
          });
          setShouldDisplayGraph(false);
        })
        .finally(() => setShouldRefreshGraph(false));
    }
  }, [
    endDate,
    graphIntervalType,
    latitude,
    longitude,
    startDate,
    weatherParameterStringValue,
    shouldRefreshGraph,
    setShouldRefreshGraph,
  ]);

  return (
    <>
      <Toast ref={toast} position="bottom-left" />
      <MenuSteps
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        onChangeAddressComponents={onChangeAddressComponents}
        addressComponents={addressComponents}
        toast={toast}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
        setWeatherParameterStringValue={setWeatherParameterStringValue}
        setGraphIntervalType={setGraphIntervalType}
        setGraphPlotType={setGraphPlotType}
        weatherParameterLabel={weatherParameterLabel}
        setWeatherParameterLabel={setWeatherParameterLabel}
        setShouldDisplayGraph={setShouldDisplayGraph}
        setShouldRefreshGraph={setShouldRefreshGraph}
      />
      {shouldDisplayGraph && (
        <DisplayGraph
          meteomaticsAPIDateValues={meteomaticsAPIDateValues}
          graphPlotType={graphPlotType}
        />
      )}
    </>
  );
}

export default App;
