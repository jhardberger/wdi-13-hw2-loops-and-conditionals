//Easy Going

// for (i = 1; i <= 20; i++) {
// 	console.log(i)
// }

//Get Even

// for (i = 0; i <= 200; i += 2) {
// 	console.log(i)
// }

//Excited Kitten

const catPhrases = ['...human...why you taking pictures of me?..', '..the catnip made me do it...', '..why does the red dot always get away...'];
const randomPhrase = catPhrases[Math.floor(catPhrases.length * Math.random())];


for (i = 0; i < 20; i++) {
	console.log('Love me, pet me! HSSSSSS!')
	if (i % 2 === 0) {
		console.log(randomPhrase);
	}
}

//right now this just returns the SAME randomized phrase each time, for all the evens... 


