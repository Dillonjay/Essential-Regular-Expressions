// Validation for U.S. postal codes. 

// This function will allow any of the three postal code formats.
// Ex: 
// 78704 or 78704-6666 or 78704 6666.
function isZipValid(zipCode) {
	var zip = /^\d{5}(?:[-\s]\d{4})?$/;
	zip.test(zipCode) ? console.log('This is a valid postal code') : console.log('This is not a valid postal code');
};

// This function will only allow a 5 digit postal code.
// EX:
// 78789
function isZipValid(zipCode) {
	var zip = /^\d{5}$/;
	zip.test(zipCode) ? console.log('This is a valid postal code') : console.log('This is not a valid postal code');
};

// This function will only allow a 9 digit postal code.
// Allows either a space or a dash to separate digits.
// Ex:
// 58485-324 or 23433 3435
function isZipValid(zipCode) {
	var zip = /^\d{5}(?:[-\s])?\d{4}$/;
	zip.test(zipCode) ? console.log('This is a valid postal code') : console.log('This is not a valid postal code');
};



