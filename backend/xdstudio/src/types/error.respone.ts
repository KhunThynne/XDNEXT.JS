interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface ApiErrorResponse {
  success: false;
  errors: ApiError[];
  data?: null;
}

export interface ApiSuccessResponse<T = any> {
  success: true;
  data: T;
  errors?: [];
}
