import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
  
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);