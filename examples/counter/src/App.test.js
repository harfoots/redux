import React from 'react';
import { createRoot, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});