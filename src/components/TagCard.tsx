import {
  Box,
  BoxProps,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import { Tag } from "../generated/graphql";

type TagCardProps = {
  tag: Tag;
  selected: boolean;
  onClick: () => void;
  sx?: BoxProps["sx"];
};

const TagCard: React.FC<TagCardProps> = (props) => {
  const { tag, selected, onClick, sx } = props;

  return (
    <Paper
      onClick={onClick}
      sx={{
        px: 2,
        py: 1,
        bgcolor: selected ? tag.backgroundColor : "background.paper",
        ...sx,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: selected ? tag.textColor : "grey.700" }}
      >
        {tag.name}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: selected ? tag.textColor : "grey.700" }}
      >
        {selected ? "Tap to remove" : "Tap to select"}
      </Typography>
    </Paper>
  );
};

export default TagCard;
