import { BoxProps, Slide, SlideProps, Box } from "@material-ui/core";
import { useEffect, useState } from "react";

type SwapPanelProps = {
  swap: boolean;
  primary: SlideProps["children"];
  secondary: SlideProps["children"];
  timeout?: number;
  sx?: BoxProps["sx"];
};

const SwapPanel: React.FC<SwapPanelProps> = (props) => {
  const { swap, primary, secondary, timeout = 500, sx } = props;
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (swap) {
      setShowSecondary(false);
      timeoutId = setTimeout(() => setShowPrimary(true), timeout);
    } else {
      setShowPrimary(false);
      timeoutId = setTimeout(() => setShowSecondary(true), timeout);
    }

    return () => clearTimeout(timeoutId);
  }, [swap]);

  return (
    <Box sx={sx}>
      <Slide direction="down" in={showPrimary} unmountOnExit mountOnEnter>
        {primary}
      </Slide>
      <Slide direction="down" in={showSecondary} unmountOnExit mountOnEnter>
        {secondary}
      </Slide>
    </Box>
  );
};

export default SwapPanel;
