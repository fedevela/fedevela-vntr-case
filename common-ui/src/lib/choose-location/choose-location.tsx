import styles from './choose-location.module.css';
import { useRef, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ChooseLocationProps {}

export function ChooseLocation(props: ChooseLocationProps) {
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);
  const options = {
    fields: ['address_components', 'geometry', 'icon', 'name'],
    types: ['establishment'],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener('place_changed', async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log(`(${place.geometry.location.lat()},${place.geometry.location.lng()})`);
    });
  }, []);

  return (
    <div className={styles['container']}>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
}

export default ChooseLocation;
