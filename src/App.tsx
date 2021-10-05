import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import theme from "./theme";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
