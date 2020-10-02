import React from 'react';
import { render as renderRtl } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('render', () => {
    renderRtl(<App />);
  });
});
