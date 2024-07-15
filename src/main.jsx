import { Toaster } from "@/components/ui/toaster";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import createApolloClient from "./graphql/apolloClient.jsx";
import "./index.css";

const apolloClient = createApolloClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
