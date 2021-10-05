import { colors, createTheme } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const theme = createTheme({
  palette: {
    background: {
      default: colors.grey[100],
    },
    secondary: {
      light: colors.grey[300],
      main: colors.grey[600],
      dark: colors.grey[700],
    },
  },
  shadows: {
    ...shadows,
    1: "0 4px 12px 0 rgba(0, 0, 0, 0.06)",
  },
});

export default theme;
