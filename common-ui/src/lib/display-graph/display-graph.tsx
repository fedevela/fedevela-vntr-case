import styles from './display-graph.module.css';
import {
  IGraphDataPoint,
  IMeteomaticsAPIDateValue,
} from '@fedevela-vntr-case/api';
import DisplayGraphTypeHeatmap from '../display-graph-type-heatmap/display-graph-type-heatmap';

export interface DisplayGraphProps {
  meteomaticsAPIDateValues: IMeteomaticsAPIDateValue[];
}

export function DisplayGraph(props: DisplayGraphProps) {
  const { meteomaticsAPIDateValues } = props;
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

  return (
    <div className={styles['container']}>
      <DisplayGraphTypeHeatmap graphDataPoints={graphDataPoints} />
    </div>
  );
}

export default DisplayGraph;
