
// This custom error class handles API and app specific errors.
export class AppError extends Error {
  name: string;
  statusCode?: number;
  isNetworkError: boolean;

  constructor(message: string, statusCode?: number, isNetworkError = false) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.isNetworkError = isNetworkError;
  }
}

// This section handles network errors
export function handleNetworkError(error: any): void {
    console.error("Network Error:", error.message || error);
    alert("Connection to Network failed. Please Check your internet connection.");
}

