/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState } from 'react';
import { RangePicker } from 'react-minimal-datetime-range';
import styles from './choose-date-time-range.module.css';
import 'react-minimal-datetime-range/lib/react-minimal-datetime-range.css';

/* eslint-disable-next-line */
export interface ChooseDateTimeRangeProps {}

export function ChooseDateTimeRange(props: ChooseDateTimeRangeProps) {
  const now = new Date();
  const [hour] = useState('00');
  const [minute] = useState('00');
  const [month] = useState(
    String(now.getMonth() + 1).padStart(2, '0')
  );
  const [date] = useState(String(now.getDate()).padStart(2, '0'));
  const [year] = useState(String(now.getFullYear()));
  return (
    <div className={styles['container']}>
      <div className="field">
        <label htmlFor="firstname1">Choose Datetime Range:</label>
        <RangePicker
          locale={`en-us`} // default is en-us
          show={false} // default is false
          disabled={false} // default is false
          allowPageClickToClose={true} // default is true
          placeholder={['Start Time', 'End Time']}
          defaultDates={[
            year + '-' + month + '-' + date,
            year + '-' + month + '-' + date,
          ]} // ['YYYY-MM-DD', 'YYYY-MM-DD']
          defaultTimes={[hour + ':' + minute, hour + ':' + minute]} // ['hh:mm', 'hh:mm']
          initialDates={[
            year + '-' + month + '-' + date,
            year + '-' + month + '-' + date,
          ]} // ['YYYY-MM-DD', 'YYYY-MM-DD']
          initialTimes={[hour + ':' + minute, hour + ':' + minute]} // ['hh:mm', 'hh:mm']
          onConfirm={(res) => console.log(res, 1)}
          // onClose={() => console.log('closed')}
          style={{ width: '400px'}}
        />
      </div>
    </div>
  );
}

export default ChooseDateTimeRange;
