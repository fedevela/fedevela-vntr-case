import styles from './display-graph.module.css';
import { Card } from 'primereact/card';
import DisplayGraphTypeHeatmap from '../display-graph-type-heatmap/display-graph-type-heatmap';
import DisplayGraphTypeChartJS from '../display-graph-type-chart-js/display-graph-type-chart-js';
import { IMeteomaticsAPIDateValue, IGraphDataPoint } from '../common-ui';

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
    <>
      {(() => {
        switch (graphPlotType) {
          case 'heatmap':
            return (
              <div className={styles['container']}>
                <Card>
                  <DisplayGraphTypeHeatmap graphDataPoints={graphDataPoints} />
                </Card>
              </div>
            );
          case 'line':
          case 'bar':
            return (
              <div className={styles['container']}>
                <Card>
                  <DisplayGraphTypeChartJS
                    graphDataPoints={graphDataPoints}
                    graphPlotType={graphPlotType}
                  />
                </Card>
              </div>
            );
        }
      })()}
    </>
  );
}

export default DisplayGraph;
