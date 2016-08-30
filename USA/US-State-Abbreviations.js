// Regular Expressions to test if a United States State Abbreviation is Valad.

// Force each state abbreviation to be capitalized. 
function isStateValid(str){
	let states = /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]/;
	states.test(str) ? console.log('This is a valid state.') : console.log('This is not a valid state.')
}

// 
function isStateValid(str){
	let states = /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]/i;
	states.test(str) ? console.log('This is a valid state.') : console.log('This is not a valid state.')
}



// An array of every state abbreviation for testing purposes.
 let usStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

// copy in this code to test if every state functions as you want it to.
  usStates.forEach(state => isStateValid(state));