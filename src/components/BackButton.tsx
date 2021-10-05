import { Icon, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const BackButton: React.FC = () => {
  const history = useHistory();
  return (
    <IconButton onClick={() => history.goBack()}>
      <Icon>arrow_back</Icon>
    </IconButton>
  );
};

export default BackButton;
