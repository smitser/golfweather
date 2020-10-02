import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('render', () => {
    renderRtl(<App />);

    const text = screen.getByText('Time to golf!');
    expect(text).toHaveClass('text-xl');
  });
});
