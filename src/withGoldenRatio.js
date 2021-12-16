import { useMemo, useEffect } from "@storybook/addons";
import { clearOverlays, addOverlays } from "./helpers";
import { PARAM_KEY } from "./constants";
import overlay from "./overlay";

export const withGoldenRatio = (StoryFunction, context) => {
  const { globals } = context;
  const isActive = globals[PARAM_KEY] === true;
  const isInDocs = context.viewMode === "docs";

  const outlineStyles = useMemo(() => {
    const selector = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : ".sb-show-main";

    return overlay(selector);
  }, [context]);

  useEffect(() => {
    const selectorId = isInDocs
      ? `addon-golden-ratio-docs-${context.id}`
      : `addon-golden-ratio`;

    if (!isActive) {
      clearOverlays(selectorId);
    } else {
      addOverlays(selectorId, outlineStyles);
    }

    return () => {
      clearOverlays(selectorId);
    };
  }, [isActive, outlineStyles, context]);

  return StoryFunction();
};
