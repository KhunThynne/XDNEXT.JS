import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema';

export const handler = createHandler({
  schema,
  // context: (req, context) => {
  //   console.log("test", context);
  //   console.log("Context req.raw keys:", Object.keys(req.raw || {}));
  //   console.log("Context req.raw.testText:", (req.raw as any)?.testText);
  //   const text = (req.raw as any)?.testText ?? "No text found";
  //   return { testText: text };
  // },
});
