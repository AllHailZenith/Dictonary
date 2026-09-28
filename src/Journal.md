Phase 1
I am passing data from one then() call to another by returning response.json() from the first then(). The next then() receives the parsed JSON data and can use it. This allows the data from the API response to move through the promise chain.

Phase 2
A Promise represents an operation that will finish in the future. If the API is down or the URL is wrong, the request can fail. The catch() method allows the program to handle the error and display or log an error message instead of leaving the failure unhandled.

Phase 3
Using the Fetch API improves the user experience because only part of the page needs to be updated when the user searches for a word. The entire page does not have to reload, so the search feels faster and the user can continue interacting with the application.
