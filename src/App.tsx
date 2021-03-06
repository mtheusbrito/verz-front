
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import "./services/api";
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
