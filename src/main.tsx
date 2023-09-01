import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import Reducer from './Reducer'
import Context from './Context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer /> */}
    <Context />
  </React.StrictMode>,
)
