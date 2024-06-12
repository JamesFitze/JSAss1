// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

const finalArray = ["", "", "", "", ""];

const arrayOne = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const arrayTwo = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const arrayThree = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const arrayFour = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const arrayFive = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let finalString;

// Gets a random word from the array
function getRandomWord(array) {
	const randomWord = Math.floor(Math.random() * array.length); 
	return randomWord;
}

function updateFinalString() {
	finalString = finalArray[0] + " " + finalArray[1] + " " + finalArray[2] + " " + finalArray[3] + " " + finalArray[4] + ".";
	document.getElementById('sentence').innerText = finalString;
}


// Event listener for the first button
document.getElementById('randomOne').addEventListener('click', function() {
	const index = getRandomWord(arrayOne);
	const randomNoun = arrayOne[index];
	finalArray[0] = randomNoun;
	const images = document.querySelectorAll('.r1 img');
    images.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	
	const img = document.querySelector(`.item0${index} img`);
    	img.style.transform = 'scale(1.1)';
		img.style.border = '4px solid black';

	finalArray[0] = randomNoun;
	speakNow(finalArray[0]);
	updateFinalString();
	console.log(randomNoun);
});

// Event listener for the second button
document.getElementById('randomTwo').addEventListener('click', function() {
	const index = getRandomWord(arrayTwo);
	const randomVerb = arrayTwo[index];
	const images = document.querySelectorAll('.r2 img');
    images.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img = document.querySelector(`.item1${index} img`);
    	img.style.transform = 'scale(1.1)';
		img.style.border = '4px solid black';
	finalArray[1] = randomVerb;
	speakNow(finalArray[1]);
	updateFinalString();
	console.log(randomVerb);
});

// Event listener for the third button
document.getElementById('randomThree').addEventListener('click', function() {
	const index = getRandomWord(arrayThree);
	const randomAdjective = arrayThree[index];
	const images = document.querySelectorAll('.r3 img');
    images.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img = document.querySelector(`.item2${index} img`);
    	img.style.transform = 'scale(1.1)';
		img.style.border = '4px solid black';
	finalArray[2] = randomAdjective;
	speakNow(finalArray[2]);
	updateFinalString();
	console.log(randomAdjective);
});

// Event listener for the fourth button
document.getElementById('randomFour').addEventListener('click', function() {
	const index = getRandomWord(arrayFour);
	const randomNoun2= arrayFour[index];
	const images = document.querySelectorAll('.r4 img');
    images.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img = document.querySelector(`.item3${index} img`);
    	img.style.transform = 'scale(1.1)';
		img.style.border = '4px solid black';
	finalArray[3] = randomNoun2;
	speakNow(finalArray[3]);
	updateFinalString();
	console.log(randomNoun2);
});

// Event listener for the fifth button
document.getElementById('randomFive').addEventListener('click', function() {
	const index = getRandomWord(arrayFive);
	const randomPlace= arrayFive[index];
	const images = document.querySelectorAll('.r5 img');
    images.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img = document.querySelector(`.item4${index} img`);
    	img.style.transform = 'scale(1.1)';
		img.style.border = '4px solid black';
	finalArray[4] = randomPlace;
	speakNow(finalArray[4]);
	updateFinalString();
	console.log(randomPlace);
});

// Event listener for the random story button
document.getElementById('story').addEventListener('click', function() {
	index1 = getRandomWord(arrayOne)
	finalArray[0] = arrayOne[index1];
	const images1 = document.querySelectorAll('.r1 img');
    images1.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img1 = document.querySelector(`.item0${index1} img`);
    	img1.style.transform = 'scale(1.1)';
		img1.style.border = '4px solid black';

	index2 = getRandomWord(arrayTwo)
	finalArray[1] = arrayTwo[index2];
	const images2 = document.querySelectorAll('.r2 img');
	images2.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img2 = document.querySelector(`.item1${index2} img`);
		img2.style.transform = 'scale(1.1)';
		img2.style.border = '4px solid black';

	index3 = getRandomWord(arrayThree)
	finalArray[2] = arrayThree[index3];
	const images3 = document.querySelectorAll('.r3 img');
	images3.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img3 = document.querySelector(`.item2${index3} img`);
		img3.style.transform = 'scale(1.1)';
		img3.style.border = '4px solid black';

	index4 = getRandomWord(arrayFour)
	finalArray[3] = arrayFour[index4];
	const images4 = document.querySelectorAll('.r4 img');
	images4.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img4 = document.querySelector(`.item3${index4} img`);
		img4.style.transform = 'scale(1.1)';
		img4.style.border = '4px solid black';

	index5 = getRandomWord(arrayFive)
	finalArray[4] = arrayFive[index5];
	const images5 = document.querySelectorAll('.r5 img');
	images5.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img5 = document.querySelector(`.item4${index5} img`);
		img5.style.transform = 'scale(1.1)';
		img5.style.border = '4px solid black';


	updateFinalString();
	speakNow(finalString);
});

// Event listener for selecting p elements

// Event listener for the reset button
document.getElementById('reset').addEventListener('click', function() {
		location.reload();
	});

// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.getElementById('speaker');

/* Functions
-------------------------------------------------- */
// function speakNow(string) {
// 	// Create a new speech object, attaching the string of text to speak
// 	const utterThis = new SpeechSynthesisUtterance(string);
// 	// Actually speak the text
// 	synth.speak(utterThis);
// }

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speaker.addEventListener('click', function () {
	speakNow(finalString);
});

// Event listener for the female voice button
document.getElementById('rate').addEventListener('click', () => {
    speakNow(finalString, 0.5);
});

function speakNow(string, speed = 1) {
    const utterThis = new SpeechSynthesisUtterance(string);
    utterThis.rate = speed; // Set the speech rate to the desired speed
    synth.speak(utterThis);
}
