import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import { theme } from './styles/theme'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import App from './components/App'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <StylesProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);