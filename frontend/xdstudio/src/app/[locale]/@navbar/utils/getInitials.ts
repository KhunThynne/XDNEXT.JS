import _ from "lodash";

export function getInitials(name?: string): string {
  if (!name) return "";
  const words = _.words(name);
  if (words.length === 1) {
    return _.toUpper(_.take(words[0], 2).join(""));
  }

  return _.toUpper(_.join([_.head(words[0]), _.head(words[1])], ""));
}
