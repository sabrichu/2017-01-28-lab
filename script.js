// Create forEach prototype
Array.prototype.forEach = function(functionToBeCalledForEachItem) {
	for (var i = 0; i < this.length; i++) {
		functionToBeCalledForEachItem(this[i]);
	}
};

// var haikuStyles = {
// 	forest: function() {
// 		return color(Math.floor(random(200)), 255, Math.floor(random(200)));	
// 	},
// 	ocean: function() {
// 		color(Math.floor(random(200)), Math.floor(random(200)), 255)
// 	},
// 	fire: function() {
// 		color(Math.floor(255, random(200)), Math.floor(random(200)))	
// 	}
// };

var fiveSyllablePhrases = [
	'in the darkest soup',
	'my dog has four legs',
	'my coffee has eyes',
	'excellent butter',
	'an exquisite taste',
	'the future is now',
	'squid games champion',
	'five syllables please'
];

var sevenSyllablePhrases = [
	'our finest hour awaits',
	'joy has only one boundary', //deal with it
	'for each love ends in "KABAM"',
	'wait! the fowl frothes in foul funk',
	'fizz fizz fizz fizz fizz fizz fizz',
	'flopping tentacles galore'
];

var lineCounter = 0;
var output;
var button;
var styleField;
var style;

function setup() {
	noCanvas();

	output = select('#output');
	button = select('#submit');
	styleField = select('#haiku_style');
	// styleField.changed(function(styleKey) {
	// 	style = haikuStyles[styleKey]();
	// });
	button.mousePressed(addHaikuLine);
};

function addHaikuLine() {
	if (lineCounter === 0) {		
		getColoredWords(fiveSyllablePhrases[Math.floor(random(fiveSyllablePhrases.length))])
	} else if (lineCounter === 1) {
		getColoredWords(sevenSyllablePhrases[Math.floor(random(sevenSyllablePhrases.length))]);
	} else if (lineCounter === 2) {
		getColoredWords(fiveSyllablePhrases[Math.floor(random(fiveSyllablePhrases.length))]);

		lineCounter = 0;
		return;
	}

	lineCounter++;
};

function getColoredWords(line) {
	var words = line.split(' ');
	var coloredLine = createP('');

	words.forEach(function(word) {
		// var span = createSpan(word + ' ').style('color', style);
		var span = createSpan(word + ' ').style('color', color(Math.floor(random(200)), 255, Math.floor(random(200))));
		span.parent(coloredLine);
	});

	return coloredLine;
}




