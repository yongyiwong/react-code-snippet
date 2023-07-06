import { BrowserRouter as Router } from 'react-router-dom';
import { Routers } from './routes/Routes';
import './scss/index.scss';

import { MsalProvider } from '@azure/msal-react';
import { publicClientApp } from 'configs';

const App = () => {
  return (
    <Router>
      <MsalProvider instance={publicClientApp}>
        <Routers />
      </MsalProvider>
    </Router>
  );
};

export default App;
