import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";
const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [RuleConfigSeverity.Disabled],
    "subject-full-stop": [RuleConfigSeverity.Disabled, "never", "."],
    "header-max-length": [RuleConfigSeverity.Error, "always", 200],
  },
} satisfies UserConfig;
export default Configuration;
