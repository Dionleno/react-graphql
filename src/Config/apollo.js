import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjg3u2icc1jyn01893k9zwygd'
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default apolloClient;
