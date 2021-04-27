import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/some/i)).toBeInTheDocument();
    expect(screen.getByAltText('image')).toBeInTheDocument();
    expect(screen.getByDisplayValue(/testValue/i)).toBeInTheDocument();
  });
});
