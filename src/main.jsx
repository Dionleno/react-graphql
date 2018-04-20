import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './Config/apollo'
import { applyMiddleware , createStore } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Root from './routes'
import HeaderDefault from './components/header/Default'

console.log(apolloClient)
const store = applyMiddleware(thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <ApolloProvider store={store} client={apolloClient}>
        <HeaderDefault>
            <BrowserRouter>
                <Root /> 
            </BrowserRouter>
        </HeaderDefault>    
    </ApolloProvider>
,document.getElementById('app'))

