import styles from './choose-location.module.css';
import { useRef, useEffect } from 'react';

export interface ChooseLocationProps {
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

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
      props.setLatitude(place.geometry.location.lat());
      props.setLongitude(place.geometry.location.lng());
    });
  }, []);

  return (
    <div className={styles['container']}>
      <div className="field">
        <label>
          Choose Location:
        </label>
        <input ref={inputRef} />
      </div>
    </div>
  );
}

export default ChooseLocation;
