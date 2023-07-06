export type ErrorType = {
  field?: string | null;
  message?: string;
  statusCode?: string;
  state?: ToastState;
};
export type APIResponseType<T> = {
  data: {
    data: T;
    errors?: ErrorType | null | string;
  };
};

export type ToastState = 'info' | 'success' | 'warning' | 'error';
