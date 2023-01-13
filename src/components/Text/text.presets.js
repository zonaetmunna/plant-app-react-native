import { colors } from "../../thems/color";
import { spacing } from "../../thems/spacing";
import { typography } from "../../thems/typograpy";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.black,
};

const BASE_BOLD = {
  fontFamily: typography.secondaryBold,
  fontSize: 16,
  color: colors.white,
};

const BOLD = {
  fontFamily: typography.secondaryBold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 24,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BOLD,
    fontSize: 32,
  },
};
