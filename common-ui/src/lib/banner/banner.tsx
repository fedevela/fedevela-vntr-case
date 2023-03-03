import styles from './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      <header>{props.text}</header>
    </div>
  );
}

export default Banner;
