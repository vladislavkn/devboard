import { colors, createTheme } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const theme = createTheme({
  palette: {
    background: {
      default: colors.grey[50],
    },
  },
  shadows: {
    ...shadows,
    1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
  },
});

export default theme;
