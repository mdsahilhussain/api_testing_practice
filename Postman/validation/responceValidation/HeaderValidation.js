//Todo  Testing headers

//!Check that a response header is present.
pm.test("Content-Type header is present", () => {
    pm.response.to.have.header("Content-Type");
});

//!Test for a response header having a particular value.
pm.test("Content-Type header is application/json", () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json; charset=utf-8');
})