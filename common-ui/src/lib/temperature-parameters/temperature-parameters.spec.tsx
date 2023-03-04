import { render } from '@testing-library/react';

import TemperatureParameters from './temperature-parameters';

describe('TemperatureParameters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemperatureParameters />);
    expect(baseElement).toBeTruthy();
  });
});
