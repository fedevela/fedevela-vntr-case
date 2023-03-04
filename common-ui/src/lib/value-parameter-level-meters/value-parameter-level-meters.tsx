/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './value-parameter-level-meters.module.css';
import { useState } from 'react';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { LEVEL_METERS_MAX, LEVEL_METERS_MIN } from '../common-ui';
/* eslint-disable-next-line */
export interface ValueParameterLevelMetersProps {}

export function ValueParameterLevelMeters(
  props: ValueParameterLevelMetersProps
) {
  const [valueLevelMeters, setValueLevelMeters] = useState<number>(1000);
  return (
    <div className="field">
      <label>Level (Meters): {valueLevelMeters} m</label>
      <Slider
        value={valueLevelMeters}
        onChange={(e: SliderChangeEvent) => setValueLevelMeters(e.value)}
        min={LEVEL_METERS_MIN}
        max={LEVEL_METERS_MAX}
        className="w-full"
      />
    </div>
  );
}

export default ValueParameterLevelMeters;
