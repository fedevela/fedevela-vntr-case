import styles from './choose-location.module.css';
import { useRef, useEffect } from 'react';

export interface ChooseLocationProps {
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export function ChooseLocation(props: ChooseLocationProps) {
  const { setLatitude, setLongitude } = props;
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const options = {
      fields: ['address_components', 'geometry', 'icon', 'name'],
      types: ['establishment'],
    };
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener('place_changed', async () => {
      const place = await autoCompleteRef.current.getPlace();
      setLatitude(place.geometry.location.lat());
      setLongitude(place.geometry.location.lng());
    });
  }, [setLatitude, setLongitude]);

  return (
    <div className={styles['container']}>
      <div className="field">
        <label>Choose Location:</label>
        <input ref={inputRef} />
      </div>
    </div>
  );
}

export default ChooseLocation;
