# What are promises ?

A Promise is a JavaScript object that links producing code and consuming code

- It means that "I Promise a Result!".
- "Producing code" is code that can take some time.
- "Consuming code" is code that must wait for the result.

## Promise Object Properties

A JavaScript Promise object can be:

1. Pending
2. Fulfilled
3. Rejected

### Example

```
    let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(); // when successful
    myReject(); // when error
    });

    myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
    );
```

For more information , see the documentation [Promises](https://www.w3schools.com/js/js_promise.asp)
