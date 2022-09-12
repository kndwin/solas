import { render } from '@testing-library/react';

import CommonUiReactNative from './common-ui-react-native';

describe('CommonUiReactNative', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiReactNative />);
    expect(baseElement).toBeTruthy();
  });
});
