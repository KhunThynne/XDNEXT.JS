import { parse } from 'graphql';
import { OperationName } from './operation.config';

export function getFieldFromQuery(query: string): OperationName | null {
  if (!query) return null;
  try {
    const ast = parse(query);
    for (const def of ast.definitions) {
      if (def.kind === 'OperationDefinition') {
        const first = def.selectionSet.selections[0];
        if (first.kind === 'Field') {
          return first.name.value as OperationName;
        }
      }
    }
  } catch (err) {
    return null;
  }
  return null;
}
