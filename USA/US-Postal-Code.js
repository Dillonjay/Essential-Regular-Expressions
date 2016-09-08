// Validation for U.S. postal codes. 

// This function will allow any of the three postal code formats.
// Ex: 
// 78704 or 78704-6666 or 78704 6666.
function isZipValid(zipCode) {
	var zip = /^\d{5}(?:[-\s]\d{4})?$/
	zip.test(zipCode) ? console.log('This is a valid zipcode') : console.log('This is not a valid zipcode')
};

// This function will only allow a 5 digit postal code.
function isZipValid(zipCode) {
	var zip = /^\d{5}/
};
// This function will only allow a 9 digit postal code.