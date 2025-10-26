
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

// This section will handle the API errors
export function handleApiError(statusCode: number, message: string): void {
  console.error(`API Error [${statusCode}]: ${message}`);

  switch (statusCode) {
    case 404:
      alert("The requested resource was not found.");
      break;
    case 500:
      alert("Server error. Please try again later.");
      break;
    default:
      alert("An unexpected error occurred while fetching data.");
      break;
  }
}

// This section handles the unexpected errors that may pop up due to some logic issues or even coding mistakes
export function handleUnexpectedError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(` AppError: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(` Unexpected Error: ${error.message}`);
  } else {
    console.error(" Unknown error:", error);
  }

  alert("Something went wrong. Please try again.");
}

