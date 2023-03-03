import styles from './choose-location.module.css';
import { useRef, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ChooseLocationProps {}

export function ChooseLocation(props: ChooseLocationProps) {
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);
  const options = {
   fields: ["address_components", "geometry", "icon", "name"],
   types: ["establishment"]
  };
  useEffect(() => {
   autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current,
    options
   );
  }, []);
  return (
    <div className={styles['container']}>
     <label>enter address :</label>
     <input ref={inputRef} />
    </div>
  );
}

export default ChooseLocation;
