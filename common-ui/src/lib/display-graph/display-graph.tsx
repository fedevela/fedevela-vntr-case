import styles from './display-graph.module.css';
import { Card } from 'primereact/card';
import {
  IGraphDataPoint,
  IMeteomaticsAPIDateValue,
} from '@fedevela-vntr-case/api';
import DisplayGraphTypeHeatmap from '../display-graph-type-heatmap/display-graph-type-heatmap';
import DisplayGraphTypeChartJS from '../display-graph-type-chart-js/display-graph-type-chart-js';

export interface DisplayGraphProps {
  graphPlotType: string;
  meteomaticsAPIDateValues: IMeteomaticsAPIDateValue[];
}

export function DisplayGraph(props: DisplayGraphProps) {
  const { graphPlotType, meteomaticsAPIDateValues } = props;
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
      dataValuePoint.ymdLabel = `${dataValuePoint.year}/${dataValuePoint.month}/${dataValuePoint.date}`;
      dataValuePoint.hLabel = `${dataValuePoint.hour}h`;

      return dataValuePoint;
    }
  );

  return (
    <div className={styles['container']}>
      <Card>
        {(() => {
          switch (graphPlotType) {
            case 'heatmap':
              return (
                <DisplayGraphTypeHeatmap graphDataPoints={graphDataPoints} />
              );
            case 'line':
              return (
                <DisplayGraphTypeChartJS graphDataPoints={graphDataPoints} />
              );
            default:
              return <div>NULL</div>;
          }
        })()}
      </Card>
    </div>
  );
}

export default DisplayGraph;
