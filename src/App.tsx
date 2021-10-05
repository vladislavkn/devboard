import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import client from "./apolloClient";
import HomeScreen from "./screens/HomeScreen";
import TagsScreen from "./screens/TagsScreen";
import theme from "./theme";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/tags" exact component={TagsScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
