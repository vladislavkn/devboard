import { AppBar, Toolbar, Typography } from "@material-ui/core";

type NavigationProps = {
  title: string;
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  bottom?: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const { title, leading, actions, bottom } = props;

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "background.paper",
        color: "grey.800",
      }}
    >
      <Toolbar>
        {leading}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {actions}
      </Toolbar>
      {bottom}
    </AppBar>
  );
};

export default Navigation;