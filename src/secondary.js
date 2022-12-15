import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log({ fromSecondary: new ApolloClient({cache: new InMemoryCache()}) });
