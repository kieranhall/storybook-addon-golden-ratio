import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const GoldenRatioTool = () => {
  const [{ withGoldenRatio }, updateGlobals] = useGlobals();
  const toggleGoldenRatio = useCallback(
    () =>
      updateGlobals({
        withGoldenRatio: withGoldenRatio ? undefined : true,
      }),
    [withGoldenRatio]
  );
  return (
    <IconButton
      key={TOOL_ID}
      active={withGoldenRatio}
      title="Show golden ratios"
      onClick={toggleGoldenRatio}
    >
      <Icons icon="contrast" />
    </IconButton>
  );
};
