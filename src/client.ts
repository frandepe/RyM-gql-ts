import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: process.env.REACT_APP_GRAPHQL_ENDPOINT, !!! No me funciona !!!!
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
