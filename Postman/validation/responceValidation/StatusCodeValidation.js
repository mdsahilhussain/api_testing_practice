//Todo Testing status codes

//! Test for the response status code.
pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

//!  If you want to test for the status code being one of a set, include them all in an  array and use oneOf().
pm.test("Successful Get request", () => {
  pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});

//!Check the status code text.
pm.test("Created new requested", () => {
  pm.response.to.have.status("Created");
});

pm.test("Successful Created", () => {
  pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});
