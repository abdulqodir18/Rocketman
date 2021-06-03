import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as Authentication } from "./context/Authentication";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { setContext } from "@apollo/client/link/context";
import App from "./App";

const httpLink = createHttpLink({
  uri: "http://159.89.54.237:4000/graphql",
});

const authLink = setContext((_, { headers }) => {

     const auth = JSON.parse(localStorage.getItem('__auth_provider_token__'));

    return {
      headers: {
        ...headers,
        token: auth ? auth.loginAdmin.token : "",
      }
    }
  });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Authentication>
          <App />
        </Authentication>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
