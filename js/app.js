/* Variables
-------------------------------------------------- */

const finalArray = ["", "", "", "", ""];

const array1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const array2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const array3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const array4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const array5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let finalString;
let speechRate = 1;
const arrays = [array1, array2, array3, array4, array5];

// Gets a random word from the array
function getRandomWord(array) {
	const randomWord = Math.floor(Math.random() * array.length); 
	return randomWord;
}

// -------------update final string method
function updateFinalString() {
	finalString = finalArray[0] + " " + finalArray[1] + " " + finalArray[2] + " " + finalArray[3] + " " + finalArray[4] + ".";
	document.getElementById('sentence').innerText = finalString;
	const sentenceElement = document.getElementById('sentence');
	if (finalString.trim() !== "") {
		sentenceElement.style.backgroundColor = "white";
	} else {
		sentenceElement.style.backgroundColor = "transparent";
	}
}
document.querySelectorAll('.random').forEach(button => {
	button.addEventListener('click', function() {
		const buttonId = this.id;
        const buttonIndex = parseInt(buttonId.slice(-1)) - 1;
		console.log(buttonIndex);
		const index = getRandomWord(arrays[buttonIndex]);
		const randomContent = arrays[buttonIndex][index];
		
		document.querySelectorAll(`.r${buttonIndex+1} img`).forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});
		const img =document.querySelector(`.item${buttonIndex}${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';

		finalArray[buttonIndex] = randomContent;
		speakNow(randomContent);
		updateFinalString();
	});
});

// Event listener for the random story button
document.getElementById('story').addEventListener('click', function() {
	index1 = getRandomWord(array1)
	finalArray[0] = array1[index1];
	const images1 = document.querySelectorAll('.r1 img');
    images1.forEach(img => {
        img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
    });
	const img1 = document.querySelector(`.item0${index1} img`);
    	img1.style.transform = 'scale(1.1)';
		img1.style.border = '4px solid black';

	index2 = getRandomWord(array2)
	finalArray[1] = array2[index2];
	const images2 = document.querySelectorAll('.r2 img');
	images2.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img2 = document.querySelector(`.item1${index2} img`);
		img2.style.transform = 'scale(1.1)';
		img2.style.border = '4px solid black';

	index3 = getRandomWord(array3)
	finalArray[2] = array3[index3];
	const images3 = document.querySelectorAll('.r3 img');
	images3.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img3 = document.querySelector(`.item2${index3} img`);
		img3.style.transform = 'scale(1.1)';
		img3.style.border = '4px solid black';

	index4 = getRandomWord(array4)
	finalArray[3] = array4[index4];
	const images4 = document.querySelectorAll('.r4 img');
	images4.forEach(img => {
		img.style.transform = 'scale(1.0)';
		img.style.border = 'none';
	});
	const img4 = document.querySelector(`.item3${index4} img`);
		img4.style.transform = 'scale(1.1)';
		img4.style.border = '4px solid black';

	index5 = getRandomWord(array5)
	finalArray[4] = array5[index5];
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


/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
function speakNow(string, speed = speechRate) {
    const utterThis = new SpeechSynthesisUtterance(string);
    utterThis.rate = speed; // Set the speech rate to the desired speed
    synth.speak(utterThis);
}

// Event listener for the speaker button
document.getElementById('speaker').addEventListener('click', function () {
    speakNow(finalString, speechRate);
});

// Event listener for the rate slider
document.getElementById('rateSlider').addEventListener('input', function () {
    speechRate = this.value;
    document.getElementById('rateValue').innerText = speechRate;
});

// Set default slider value on page load
window.addEventListener('load', function() {
    const rateSlider = document.getElementById('rateSlider');
    rateSlider.value = 1;
    document.getElementById('rateValue').innerText = rateSlider.value;

    // Set initial background color based on the initial content of the sentence element
    const sentenceElement = document.getElementById('sentence');
    if (sentenceElement.innerText.trim() !== "") {
        sentenceElement.style.backgroundColor = "white";
    } else {
        sentenceElement.style.backgroundColor = "transparent";
    }
});

// --------------------------------manual selection r1
const itemsR1 = document.querySelectorAll('.r1');
itemsR1.forEach(item => {
	item.addEventListener('click', () => {
		const index = item.className.slice(-1);
		finalArray[0] = array1[index];
		console.log(index);
		speakNow(finalArray[0]);
		updateFinalString();

		// style
		const images = document.querySelectorAll('.r1 img');
		images.forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});

		const img = document.querySelector(`.item0${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';
		});
});

//-------------------------------r2
const itemsR2 = document.querySelectorAll('.r2');
itemsR2.forEach(item => {
	item.addEventListener('click', () => {
		const index = item.className.slice(-1);
		finalArray[1] = array2[index];
		speakNow(finalArray[1]);
		updateFinalString();

		// style
		const images = document.querySelectorAll('.r2 img');
		images.forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});

		const img = document.querySelector(`.item1${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';
		});
});

//-------------------------------r3
const itemsR3 = document.querySelectorAll('.r3');
itemsR3.forEach(item => {
	item.addEventListener('click', () => {
		const index = item.className.slice(-1);
		finalArray[2] = array3[index];
		speakNow(finalArray[2]);
		updateFinalString();

		// style
		const images = document.querySelectorAll('.r3 img');
		images.forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});

		const img = document.querySelector(`.item2${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';
		});
});

//-------------------------------r4
const itemsR4 = document.querySelectorAll('.r4');
itemsR4.forEach(item => {
	item.addEventListener('click', () => {
		const index = item.className.slice(-1);
		finalArray[3] = array4[index];
		speakNow(finalArray[3]);
		updateFinalString();

		// style
		const images = document.querySelectorAll('.r4 img');
		images.forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});

		const img = document.querySelector(`.item3${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';
		});
});

//-------------------------------r5
const itemsR5 = document.querySelectorAll('.r5');
itemsR5.forEach(item => {
	item.addEventListener('click', () => {
		const index = item.className.slice(-1);
		finalArray[4] = array5[index];
		speakNow(finalArray[4]);
		updateFinalString();

		// style
		const images = document.querySelectorAll('.r5 img');
		images.forEach(img => {
			img.style.transform = 'scale(1.0)';
			img.style.border = 'none';
		});

		const img = document.querySelector(`.item4${index} img`);
			img.style.transform = 'scale(1.1)';
			img.style.border = '4px solid black';
		});
});