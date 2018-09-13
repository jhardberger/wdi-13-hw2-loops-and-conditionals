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

// for (i = 0; i < 20; i++) {
// 	console.log('Love me, pet me! HSSSSSS!')
// 	if (i % 2 === 0) {
// 		const randomPhrase = catPhrases[Math.floor(catPhrases.length * Math.random())];
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

// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// shahzad[0] = "Gameboy";
// daniel[1] = (daniel[1] + 1)
// ryan[2] = "Gotham City";
// reuben.pop(2);
// reuben.push("Chicago");
// jim.pop(2); 
// jim.push("Hong Kong", "Geneva", "Sao Paolo")

//Bonus: 

// jim.splice(2, 1);

// console.log(shahzad);
// console.log(jim);
// console.log(reuben);
// console.log(daniel);
// console.log(ryan);

//Yell at the Ninja Turtles

//let ninjaTurtles = ['mikey', 'Donny', 'leo', 'Raff']

// for (i = 0; i < ninjaTurtles.length; i++) {
// 	console.log(ninjaTurtles[i].toUpperCase())
// }

//Bonus:

// for (i = 0; i < ninjaTurtles.length; i++) {
// 	if (i % 2 === 0) { 
// 		console.log(ninjaTurtles[i].toUpperCase())
// 	} else console.log(ninjaTurtles[i].toLowerCase())
// } 

//Return of the Closets



const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// //Alien Attire

// const kristynsShoe = kristynsCloset.splice(0, 1);

// thomsCloset[2].push(kristynsShoe[0]);

// console.log(kristynsShoe);
// console.log(thomsCloset);
// console.log(kristynsCloset);

// //Dress 'em up

// console.log(`Today, Kristyn is wearing ${kristynsCloset[0]}, with some ${kristynsCloset[3]} and her trademark ${kristynsCloset[2]}. She's fab! She's also eating ${kristynsCloset[5]}, because that's not a thing you wear.`)

// console.log(`Today, Thoms is wearing a ${thomsCloset[0][0]} and ${thomsCloset[1][1]} and a pair of ${thomsCloset[2][0]}. He looks killer.`)


//Dirty Laundry

// for (i = 0; i <= kristynsCloset.length; i++) {
// 	console.log('WHIRR: now washing ' + kristynsCloset[i])
// };

// console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);
// // I think this is what you're asking? 

const pool = [];

for (i = 1; i <= 1000; i++) {

	if (i % 3 === 0 || i % 5 === 0) {
		pool.push(i);
	} 
};

const sum = pool.reduce(add, 0);

function add(a, b) {
	return a + b;
}

console.log(sum);

//this is maybe not the way we were supposed to do this, but I found it online and made it work! that counts for something, right?



