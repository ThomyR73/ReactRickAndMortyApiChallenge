import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'node-fetch'

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
        fetch
    })
});

export default client