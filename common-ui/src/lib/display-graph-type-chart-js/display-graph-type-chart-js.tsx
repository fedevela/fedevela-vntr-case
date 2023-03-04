/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './display-graph-type-chart-js.module.css';

import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Matercolor from 'matercolors';
import { IGroupedValuesMap } from '@fedevela-vntr-case/api';
import { createArray24HLabels, IGraphDataPoint } from '../common-ui';

export interface DisplayGraphTypeChartJSProps {
  graphDataPoints: IGraphDataPoint[];
}

export function DisplayGraphTypeChartJS(props: DisplayGraphTypeChartJSProps) {
  const colorPalette = new Matercolor('#6200EE');
  const colorArray = [
    colorPalette.palette.primary['50'],
    colorPalette.palette.primary['100'],
    colorPalette.palette.primary['200'],
    colorPalette.palette.primary['300'],
    colorPalette.palette.primary['400'],
    colorPalette.palette.primary['500'],
    colorPalette.palette.primary['600'],
    colorPalette.palette.primary['700'],
    colorPalette.palette.primary['800'],
    colorPalette.palette.primary['900'],
  ];

  const { graphDataPoints } = props;
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const chartLabels = createArray24HLabels();

  const gdpGroupedByYMD: IGroupedValuesMap = {};
  graphDataPoints.forEach((gdp) => {
    const ymdLabel = gdp.ymdLabel as string;
    const gdpValue = gdp.value as number;
    if (!gdpGroupedByYMD[ymdLabel]) {
      gdpGroupedByYMD[ymdLabel] = [];
    }
    gdpGroupedByYMD[ymdLabel].push(gdpValue);
  });

  const chartDatasets = [
    ...new Set(
      Object.keys(gdpGroupedByYMD).map((ymdKey, index) => {
        return {
          label: ymdKey,
          data: gdpGroupedByYMD[ymdKey],
          fill: false,
          borderColor: colorArray[index % 10],
          tension: 0.4,
        };
      })
    ),
  ];

  useEffect(() => {
    const data = {
      labels: chartLabels,
      datasets: chartDatasets,
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}

export default DisplayGraphTypeChartJS;
