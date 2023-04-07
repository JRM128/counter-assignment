import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  userEvent.click(screen.getByText('+'));
  const count2 = screen.getByTestId('count');
  expect(count.textContent).toEqual(count2.textContent);
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  userEvent.click(screen.getByText('-'));
  const count2 = screen.getByTestId('count');
  expect(count.textContent).toEqual(count2.textContent);
});
