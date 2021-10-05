import { Toolbar, Paper, IconButton, Icon, InputBase } from "@material-ui/core";
import React, { forwardRef } from "react";

type SearchBarProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClose: () => void;
};

const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>((props, ref) => {
  const { value, onChange, onClose } = props;

  return (
    <Toolbar ref={ref}>
      <Paper sx={{ display: "flex", flexGrow: 1 }}>
        <IconButton onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
        <InputBase
          value={value}
          onChange={onChange}
          sx={{ p: 0.5, flexGrow: 1 }}
          placeholder="Search for tag"
        />
      </Paper>
    </Toolbar>
  );
});

export default SearchBar;
