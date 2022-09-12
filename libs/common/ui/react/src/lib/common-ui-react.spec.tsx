import { render } from '@testing-library/react';

import CommonUiReact from './common-ui-react';

describe('CommonUiReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiReact />);
    expect(baseElement).toBeTruthy();
  });
});
