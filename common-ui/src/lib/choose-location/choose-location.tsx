import styles from './choose-location.module.css';
import { useRef, useEffect } from 'react';
import { IKeyValueMap } from '@fedevela-vntr-case/api';

export interface ChooseLocationProps {
  onChangeAddressComponents: (acs: IKeyValueMap[]) => void;
  setShouldDisableNextButton: (sdnb: boolean) => void;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export function ChooseLocation(props: ChooseLocationProps) {
  const {
    setLatitude,
    setLongitude,
    onChangeAddressComponents,
    setShouldDisableNextButton,
  } = props;
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
      const addressComponents = place.address_components.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ac: { types: any[]; long_name: any }) => {
          const addressComponent: IKeyValueMap = {};
          addressComponent[`${ac.types[0]}`] = ac.long_name;
          return addressComponent;
        }
      );
      onChangeAddressComponents(addressComponents);
      setShouldDisableNextButton(false);
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
