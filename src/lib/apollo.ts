import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_API_ACESS,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_GRAPHCMS_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
