import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";

type NavigationProps = {
  title: string;
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  bottom?: React.ReactNode;
};

const Navigation = forwardRef<HTMLDivElement, NavigationProps>((props, ref) => {
  const { title, leading, actions, bottom } = props;

  return (
    <AppBar
      ref={ref}
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "background.paper",
        color: "grey.800",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            "&:not(:empty)": {
              mr: 1,
            },
          }}
        >
          {leading}
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        {actions}
      </Toolbar>
      {bottom}
    </AppBar>
  );
});

export default Navigation;
