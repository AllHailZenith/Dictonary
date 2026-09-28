Phase 1
I am passing data from one then() call to another by returning response.json() from the first then(). The next then() receives the parsed JSON data and can use it. This allows the data from the API response to move through the promise chain.

Phase 2
A Promise represents an operation that will finish in the future. If the API is down or the URL is wrong, the request can fail. The catch() method allows the program to handle the error and display or log an error message instead of leaving the failure unhandled.
