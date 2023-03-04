import { render } from '@testing-library/react';

import ValueParameterIntervalHD from './value-parameter-interval-hd';

describe('ValueParameterIntervalHD', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueParameterIntervalHD />);
    expect(baseElement).toBeTruthy();
  });
});
