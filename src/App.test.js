import React from 'react';
import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import App from './App';
import { getAll } from './restdb';

jest.mock('./restdb');

describe('Add/Update Form Title', () => {
  test('displays "Add" when no customer is selected', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Add Customer/i })).toBeInTheDocument();
  });


 

});
