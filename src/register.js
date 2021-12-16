import React from "react";
import { addons, types } from "@storybook/addons";

import { ADDON_ID } from "./constants";
import { GoldenRatioTool } from "./GoldenRatioTool";

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: "Golden Ratio",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <GoldenRatioTool />,
  });
});
