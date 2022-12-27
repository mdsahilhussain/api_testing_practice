//Todo  Testing cookies

//! Test if a cookie is present in the response.
pm.test("Cookie 'language' is present", () => {
pm.expect(pm.cookies.has('language')).to.be.true;
});

//! Test for a particular cookie value:
pm.test("Cookie language has value 1", () => {
pm.expect(pm.cookies.get('language')).to.eql('en-gb') ;
});