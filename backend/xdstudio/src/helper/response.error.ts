import { ApiErrorResponse } from "@/types/error.respone";
export function createErrorResponse(
  message: string,
  code?: string,
  details?: unknown,
): ApiErrorResponse {
  return {
    success: false,
    errors: [{ message, code, details }],
    data: null,
  };
}
