export async function handleErrors(response: Response) {
  const errorResponse = await response.json();
  let errorMessage = "server error"; // default error message
  let errorCause;

  if (typeof errorResponse === "object") {
    if ("message" in errorResponse) {
      errorMessage = errorResponse.message;
    }

    if ("cause" in errorResponse) {
      errorCause = errorResponse.cause;
    }
  }
  // console log the error
  console.log("----------", "ERROR MESSAGE: ", errorMessage, "CAUSE: ", errorCause, "FULL ERROR: ", errorResponse);

  if (response.status >= 500) {
    // return custom error message
    return new Error("Something went wrong", { cause: errorCause });
  }

  // return the error message that comes from the server
  return new Error(errorMessage, { cause: errorResponse.cause });
}
