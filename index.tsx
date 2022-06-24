import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

const rootEle = document.querySelector('#root');
if (rootEle) {
  ReactDOM.createRoot(rootEle).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}
