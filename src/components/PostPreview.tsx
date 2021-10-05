import {
  Avatar,
  BoxProps,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  colors,
  Icon,
  Box,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Post } from "../generated/graphql";

type PostPreviewProps = {
  post: Post;
  sx?: BoxProps["sx"];
};

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const { post, sx } = props;

  return (
    <Paper square sx={{ bgcolor: "background.paper", ...sx }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: colors.indigo[400] }}
            src={post.author.avatarURL}
          >
            {post.author.name[0]}
          </Avatar>
        }
        title={post.author.name}
        subheader={post.readableDate}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="secondary"
          LinkComponent="a"
          href={post.originalLink}
          target="_blank"
        >
          <Icon>link</Icon>
        </IconButton>
        <IconButton
          sx={{ marginLeft: "0 !important" }}
          color="secondary"
          LinkComponent="a"
          href={post.commentsLink}
          target="_blank"
        >
          <Icon>comment</Icon>
        </IconButton>

        <Box sx={{ display: "flex", flexGrow: 1 }} />
        <Button>
          Read post <Icon sx={{ ml: 1 }}>arrow_forward</Icon>
        </Button>
      </CardActions>
    </Paper>
  );
};

export default PostPreview;
