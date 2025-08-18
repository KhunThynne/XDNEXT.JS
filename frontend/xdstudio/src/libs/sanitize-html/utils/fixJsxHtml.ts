import sanitizeHtml from "sanitize-html";

/**
 * Converts a JSX-like HTML string into valid HTML and sanitizes it to prevent XSS.
 * Works for multiple fields, not limited to product descriptions.
 */
export function parseJsxString(raw: string): string {
  if (!raw) return "";

  // 1. Convert React-style attributes (className) → standard HTML (class)
  let fixed = raw.replace(/className=/g, "class=");

  // 2. Remove JSX-style string interpolation:
  //    {`...`} → ...
  //    {"..."} → ...
  //    {'...'} → ...
  fixed = fixed
    .replace(/\{\s*`([^`]*)`\s*\}/g, "$1")  // template literals
    .replace(/\{\s*"([^"]*)"\s*\}/g, "$1")  // double quotes
    .replace(/\{\s*'([^']*)'\s*\}/g, "$1"); // single quotes

  // 3. Sanitize HTML to remove unsafe tags/attributes
  const safeHTML = sanitizeHtml(fixed, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]), // allow default + <img>
    allowedAttributes: {
      "*": ["class", "style"], // allow class/style for all tags
      a: ["href", "target"],   // allow href/target for <a>
    },
  });

  return safeHTML;
}
