import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initialState, reducer } from './state/reducer'
import { StateProvider } from './state/StateProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
