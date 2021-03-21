# Array exercise
### pre-requisites
Node 12.x or later

Before testing, run `npm ci`

### TODOS
`/src/array-functions.ts` contains empty lodash like array functions to be implemented

Implement these functions and verify that they work correctly by running `npm run test`

Make all the test green, and you are a true JavaScript guru!

#### Hint
If you want to test only 1 array function at a time, you can add `only` to a specific test suite.

For-example if you want to test only filter function then add the `only` to `tests/filter.test.ts` such as in the example below:
```
describe.only('filter', () => {
   /* ... */
})
```

--------

#### If you encounter test do not work correctly or are not sufficient, please submit a pull-request 🙏