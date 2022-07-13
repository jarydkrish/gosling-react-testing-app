import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});

test('renders a button to click', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/3/i)).toBeInTheDocument();

  expect(screen.getByRole('button', { name: 'Increment value' })).toBeInTheDocument();
  const element = screen.getByRole('button', { name: 'Increment value' });
  fireEvent.click(element);
  expect(screen.getByText(/4/i)).toBeInTheDocument();
});
