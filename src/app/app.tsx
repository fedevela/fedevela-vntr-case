/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { HeatMapGrid } from 'react-grid-heatmap';

import {
  exampleMeteomaticsAPI,
  IAddressComponent,
  IGraphDataPoint,
  IMeteomaticsAPIDateValue,
} from '@fedevela-vntr-case/api';
import { MenuSteps } from '@fedevela-vntr-case/common-ui';
import { useEffect, useState } from 'react';

export function App() {
  const [graphIntervalType, setGraphIntervalType] = useState('1h');
  const [graphPlotType, setGraphPlotType] = useState('heatmap');
  const [startDate, setStartDate] = useState(new Date(0));
  const [endDate, setEndDate] = useState(new Date(0));
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [weatherParameterStringValue, setWeatherParameterStringValue] =
    useState<string>('');
  const [addressComponents, setAddressComponents] = useState<
    IAddressComponent[] | []
  >([]);

  const resultMeteomaticsAPIRaw = exampleMeteomaticsAPI();
  const meteomaticsAPIDateValues: IMeteomaticsAPIDateValue[] =
    resultMeteomaticsAPIRaw.data[0].coordinates[0].dates;
  const graphDataPoints: IGraphDataPoint[] = meteomaticsAPIDateValues.map(
    (madv) => {
      const dvDate = new Date(madv.date);
      const dataValuePoint: IGraphDataPoint = {
        year: dvDate.getUTCFullYear(),
        month: dvDate.getUTCMonth() + 1,
        date: dvDate.getUTCDate(),
        hour: dvDate.getUTCHours(),
        value: madv.value,
      };
      dataValuePoint.yLabel = `${dataValuePoint.year}/${dataValuePoint.month}/${dataValuePoint.date}`;
      dataValuePoint.xLabel = `${dataValuePoint.hour}h`;

      return dataValuePoint;
    }
  );

  console.log(graphDataPoints);

  const xLabels = new Array(24).fill(0).map((_, i) => `${i}h`);
  const yLabels = [...new Set(graphDataPoints.map( (gdp) => gdp.yLabel ))];
  const plotData = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(null));
  graphDataPoints.forEach((gdp: IGraphDataPoint) => {
    const xCoord = xLabels.indexOf(gdp.xLabel);
    const yCoord = yLabels.indexOf(gdp.yLabel);
    plotData[yCoord][xCoord] = gdp.value;
  });

  const onChangeAddressComponents = (acs: IAddressComponent[]) =>
    setAddressComponents([...acs]);

  useEffect(() => {
    console.log(`latitude : ${latitude}`);
  }, [latitude]);
  useEffect(() => {
    console.log(`longitude : ${longitude}`);
  }, [longitude]);
  useEffect(() => {
    console.log(`addressComponents : ${JSON.stringify(addressComponents)}`);
  }, [addressComponents]);
  useEffect(() => {
    console.log(`startDate : ${startDate.toUTCString()}`);
  }, [startDate]);
  useEffect(() => {
    console.log(`endDate : ${endDate.toUTCString()}`);
  }, [endDate]);
  useEffect(() => {
    console.log(`endDate : ${endDate.toUTCString()}`);
  }, [endDate]);
  useEffect(() => {
    console.log(`result : `);
    console.log(resultMeteomaticsAPIRaw);
  }, [resultMeteomaticsAPIRaw]);
  useEffect(() => {
    console.log(`graphIntervalType : ${graphIntervalType}`);
  }, [graphIntervalType]);
  useEffect(() => {
    console.log(`graphPlotType : ${graphPlotType}`);
  }, [graphPlotType]);

  return (
    <>
      <MenuSteps
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        onChangeAddressComponents={onChangeAddressComponents}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setWeatherParameterStringValue={setWeatherParameterStringValue}
        setGraphIntervalType={setGraphIntervalType}
        setGraphPlotType={setGraphPlotType}
      ></MenuSteps>
      <p className="m-0">{weatherParameterStringValue}</p>
      <div
        style={{
          width: '100%',
        }}
      >
        <HeatMapGrid
          data={plotData}
          xLabels={xLabels}
          yLabels={yLabels}
          // Render cell with tooltip
          cellRender={(x, y, value) => (
            <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
          )}
          xLabelsStyle={(index) => ({
            color: '#777',
            fontSize: '.8rem',
          })}
          yLabelsStyle={() => ({
            fontSize: '.7rem',
            textTransform: 'uppercase',
            color: '#777',
          })}
          cellStyle={(_x, _y, ratio) => ({
            background: `rgb(12, 160, 44, ${ratio})`,
            fontSize: '.8rem',
            color: `rgb(0, 0, 0, ${ratio / 2 + 0.5})`,
          })}
          cellHeight="2rem"
          xLabelsPos="top"
          yLabelsPos="left"
          square
        />
      </div>
    </>
  );
}

export default App;
