import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import {BrowserRouter} from 'react-router-dom'
import './styles/index.css';
import './styles/styles'
import { theme } from './styles/theme'
import {ThemeProvider} from '@material-ui/core'
import App from './components/App';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);