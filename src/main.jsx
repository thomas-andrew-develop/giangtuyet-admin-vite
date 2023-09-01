import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GlobalStyles from './component/GlobalStyles/index.js';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
