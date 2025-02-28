import './assets/styles/style.sass';
import './utils/i18n';

import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';

import createStore from './store/createStore';
import AppLayout from './components/Layout';

const { store, persistor } = createStore();

createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
