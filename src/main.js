import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(new ApolloClient({cache: new InMemoryCache()}));
