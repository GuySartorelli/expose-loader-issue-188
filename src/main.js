import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log({ fromPrimary: new ApolloClient({cache: new InMemoryCache()}) });
