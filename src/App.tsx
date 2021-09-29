import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography,
  CssBaseline,
  Box,
} from "@material-ui/core";

const App: React.FC = () => (
  <Box sx={{ bgcolor: "grey.50", minHeight: "100vh" }}>
    <CssBaseline />
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "grey.800",
        borderBottom: 1,
        borderColor: "grey.300",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Devboard
        </Typography>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Icon>filter_alt</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default App;
