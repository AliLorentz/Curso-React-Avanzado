import React from 'react'
import { render } from 'react-dom'
import { App } from './App.jsx'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Context from './Context'

const client = new ApolloClient({
  uri: 'https:probando-now.vercel.app/graphql',
  request: operation => {
  	// se ejecuta antes de cualquier peticion
  	const token = window.sessionStorage.getItem('token')
  	const authorization = token ? `Bearer ${token}` : ''
  	operation.setContext({
  		headers: {
  			authorization
  		}
  	})
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
