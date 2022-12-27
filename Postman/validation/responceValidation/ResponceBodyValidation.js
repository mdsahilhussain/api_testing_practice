//Todo  Asserting a value type

//!Test the type of any part of the response:
const jsonData = pm.response.json() ;
pm.test ("Test data type of the response", () => {
pm.expect(jsonData).to.be.an("object") ;
pm.expect(jsonData.name).to.be.a("string") ;
pm.expect(jsonData.id).to.be.a("number") ;
pm. expect(jsonData.courses).to.be.an("array") ;
});

//Todo Asserting array properties
//!  Check if an array is empty and if it contains particular items.
pm.test("Test array properties", () => {
//?  courses includes "Java"
pm.expect(jsonData.courses).to.include("Java") ;
//?  courses array must include all listed
pm.expect(jsonData. courses).to.have.members(["Java", "Selenium"]) ;
});

//! Validating JSON fields in Response
pm.test("value of location field is India", ()=> {
var jsonData = pm.response.json();
expect(jsonData.id).to.eql(1) ;
expect(jsonData.name).to.eql("John") ;
expect(jsonData. location).to.eql("india") ;
expect(jsonData.phone).to.eql("1234567890") ;
expect(jsonData.courses[0]).to.eql("Java") ;
expect(jsonData.courses[1]).to.eql("Selenium") ;
});

//! Validating JSON Schema
var schema ={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "name": {
        "type": "string"
      },
      "location": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "courses": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
          {
            "type": "string"
          }
        ]
      }
    },
    "required": [
      "id",
      "name",
      "location",
      "phone",
      "courses"
    ]
  }
  
  pm.test("Schema is valid", ()=>{
  pm.expect(tv4.validate(jsonData, schema)).to.be.true;
  })