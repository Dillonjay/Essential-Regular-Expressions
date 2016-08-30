/// Validation for U.S. state abbreviations. 


// Capitalization enforced. EX: AL, TX, MT, ect..  
function isStateValid(str){
	var states = /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]/;
	states.test(str) ? console.log('This is a valid state.') : console.log('This is not a valid state.')
};


// All 50 abbreviations in capital letters. 
var usStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];


// If desired, use code below in combination with all code above to test in console. 
var stateCount = 1; 
usStates.forEach(state => {
	console.log(state, stateCount++);
  	return isStateValid(state);
});


///////////////////////////////////////////////////////////////////////////


// Capitalization not enforced. Ex: Al,tx,mT ect...
function isStateValid(str){
	var states = /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]/i;
	states.test(str) ? console.log('This is a valid state.') : console.log('This is not a valid state.')
};


// State abbreviations with random capitalization. 
var usStates = ['al','AK','Az','AR','ca','cO','CT','DE','FL','Ga','HI','id','IL','In','IA','KS','KY','la','ME','MD','mA','MI','Mn','MS','MO','MT','NE','NV','nh','NJ','Nm','NY','nc','ND','oH','ok','Or','PA','rI','SC','sd','TN','TX','Ut','VT','VA','wA','WV','WI','Wy'];


// If desired, use code below in combination with all code above to test in console.
var stateCount = 1; 
usStates.forEach(state => {
	console.log(state, stateCount++);
  	return isStateValid(state);
});

