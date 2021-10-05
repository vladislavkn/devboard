import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import client from "./apolloClient";
import HomeScreen from "./screens/HomeScreen";
import theme from "./theme";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
