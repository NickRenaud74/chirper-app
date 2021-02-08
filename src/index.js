import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import { theme } from './styles/theme'
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import App from './components/App'

const store = createStore(reducer, middleware)
const generateClassName = createGenerateClassName()

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider geneerateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
    </Provider>,
  document.getElementById('root')
);