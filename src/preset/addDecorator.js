import { withGoldenRatio } from "../withGoldenRatio";
import { PARAM_KEY } from "../constants";

export const decorators = [withGoldenRatio];

export const globals = {
  [PARAM_KEY]: false,
};
