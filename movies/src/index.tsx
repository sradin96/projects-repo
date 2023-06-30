import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/style.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { AnimeContextProvider } from './store/AnimeContext';

// const client = new ApolloClient({
//   uri: 'https://graphql.anilist.co',
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <AnimeContextProvider>
      <App />
    </AnimeContextProvider>
  </ApolloProvider>
);

reportWebVitals();
