import "./App.css";
import Router from "./Router/Router";
import { ApolloProvider } from "@apollo/client";
import client from "./client";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  );
}

export default App;
