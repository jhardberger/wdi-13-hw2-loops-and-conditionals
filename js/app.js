//Easy Going

// for (i = 1; i <= 20; i++) {
// 	console.log(i)
// }


//Get Even

// for (i = 0; i <= 200; i += 2) {
// 	console.log(i)
// }


//Excited Kitten

// const catPhrases = ['...human...why you taking pictures of me?..', '..the catnip made me do it...', '..why does the red dot always get away...'];
// const randomPhrase = catPhrases[Math.floor(catPhrases.length * Math.random())];

// for (i = 0; i < 20; i++) {
// 	console.log('Love me, pet me! HSSSSSS!')
// 	if (i % 2 === 0) {
// 		console.log(randomPhrase);
// 	}
// }

//right now this just returns the SAME randomized phrase each time, for all the evens... 


//Fizz Buzz


// for (i = 1; i < 100; i++) {
// 		if (i % 3 === 0) {
// 			console.log('Fizz')
// 		} if (i % 5 === 0) {
// 			console.log('Buzz')
// 		} if (i % 3 === 0 || i % 5 === 0) {
// 			console.log('Fizzbuzz')
// 		}
// }

// ^^ classic original vv displays number alongside Fizz/Buzz/Fizzbuzz - built so I could double check the numbers. 

// for (i = 1; i < 100; i++) {
// 		if (i % 3 === 0) {
// 			console.log('Fizz ' + i)
// 		} if (i % 5 === 0) {
// 			console.log('Buzz ' + i)
// 		} if (i % 3 === 0 || i % 5 === 0) {
// 			console.log('Fizzbuzz ' + i)
// 		}
// }

//Getting to Know You

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1] = (daniel[1] + 1)
ryan[2] = "Gotham City";
reuben.pop(2);
reuben.push("Chicago");
jim.pop(2); 
jim.push("Hong Kong", "Geneva", "Sao Paolo")
jim.splice(2, 1);

console.log(shahzad);
console.log(jim);
console.log(reuben);
console.log(daniel);
console.log(ryan);


