import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { graphqlClient } from './config/graphql'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
