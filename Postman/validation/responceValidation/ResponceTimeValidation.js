//Todo  Testing response times

//!Test for the response time to be within a specified range.
//? Below 200ms
pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(200);
});


//? Above 200ms
pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.above(200);
});
