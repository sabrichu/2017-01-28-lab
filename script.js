// Create forEach prototype
Array.prototype.forEach = function(functionToBeCalledForEachItem) {
	for (var i = 0; i < this.length; i++) {
		functionToBeCalledForEachItem(this[i], i);
	}
};

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

function setup() {
	noCanvas();

	output = select('#output');
	button = select('#submit');
	styleField = select('#haiku_style');
	button.mousePressed(addHaikuLine);
};

function addHaikuLine() {
	if (lineCounter === 0) {		
		getColoredWords(fiveSyllablePhrases[Math.floor(random(fiveSyllablePhrases.length))])
	} else if (lineCounter === 1) {
		getColoredWords(sevenSyllablePhrases[Math.floor(random(sevenSyllablePhrases.length))]);
	} else if (lineCounter === 2) {
		getColoredWords(fiveSyllablePhrases[Math.floor(random(fiveSyllablePhrases.length))]);
		createP('--------------------------------')
		lineCounter = 0;
		return;
	}

	lineCounter++;
};

function getColoredWords(line) {
	var haikuStyles = {
		forest: color(Math.floor(random(200)), 255, Math.floor(random(200))),
		ocean: color(Math.floor(random(200)), Math.floor(random(200)), 255),
		fire: color(Math.floor(255, random(200)), Math.floor(random(200)))
	};

	var style = haikuStyles[styleField.value()] || haikuStyles['forest'];

	var words = line.split(' ');
	var coloredLine = createP('');

	words.forEach(function(word) {
		var span = createSpan(word + ' ').style('color', style);
		span.parent(coloredLine);
	});

	return coloredLine;
}
