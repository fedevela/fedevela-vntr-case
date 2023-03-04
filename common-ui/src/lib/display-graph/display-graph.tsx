import styles from './display-graph.module.css';

/* eslint-disable-next-line */
export interface DisplayGraphProps {}

export function DisplayGraph(props: DisplayGraphProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DisplayGraph!</h1>
    </div>
  );
}

export default DisplayGraph;
