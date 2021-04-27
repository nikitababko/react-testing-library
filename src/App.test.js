import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    // expect(screen.queryByText(/Searches for React/i)).toBeNull();
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    screen.debug();

    expect(screen.getByAltText(/image/i)).toHaveClass('image');
    expect(screen.getByLabelText(/search/i)).toBeRequired();
    expect(screen.getByLabelText(/name/i)).not.toBeRequired();
  });
});
