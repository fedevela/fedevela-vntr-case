/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './display-graph-type-heatmap.module.css';
import { HeatMapGrid } from 'react-grid-heatmap';
import {
  IGraphDataPoint,
  IMeteomaticsAPIDateValue,
} from '@fedevela-vntr-case/api';

export interface DisplayGraphTypeHeatmapProps {
  graphDataPoints: IGraphDataPoint[];
}

export function DisplayGraphTypeHeatmap(props: DisplayGraphTypeHeatmapProps) {
  const {graphDataPoints} = props;

  console.log(graphDataPoints);

  const xLabels = new Array(24).fill(0).map((_, i) => `${i}h`);
  const yLabels = [...new Set(graphDataPoints.map((gdp) => gdp.yLabel))];
  const plotData = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(null));
  graphDataPoints.forEach((gdp: IGraphDataPoint) => {
    const xCoord = xLabels.indexOf(gdp.xLabel);
    const yCoord = yLabels.indexOf(gdp.yLabel);
    plotData[yCoord][xCoord] = gdp.value;
  });

  return (
    <div className={styles['container']}>
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
    </div>
  );
}

export default DisplayGraphTypeHeatmap;
