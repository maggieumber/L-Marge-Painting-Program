var song, largemarge, tinymarge, peewee;

function preload() {
	// "Trepidation" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/
	song = loadSound('assets/Trepidation.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	// song loaded during preload(), ready to play in setup()
	song.play();
	// largemarge = loadAnimation('assets/largemarge_0000.png', 'assets/largemarge_0009.png');
	tinymarge = loadAnimation('assets/tinymarge_0000.png', 'assets/tinymarge_0009.png')
	peewee = loadAnimation('assets/peewee_0000.png', 'assets/peewee_0002.png');
}

function draw() {
	animation(peewee, 500, windowHeight);
	// animation(largemarge, mouseX, mouseY);
	animation(tinymarge, mouseX, mouseY);
}

function mousePressed() {
	getAudioContext().resume()
	speechSynthesis.speak(msg);
}

// Text To Speech
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 0.3; // 0.1 to 10
msg.pitch = 1.5; //0 to 2
msg.text = [
	"On this very night...",
	"Ten years ago...",
	"along this same stretch of road...",
	"in a dense fog...",
	"just like this...",
	"I saw the worst accident I ever seen...",
	"There was this sound LIKE a garbage truck",
	"dropped off the Empire State Building...",
	"And when they finally pulled the driver's body from the",
	"twisted",
	"burning",
	"wreck...",
	"it looked",
	"like...",
	"this",
	"ughhhhh hahahahah ahahaha oooo haha",
	"happy birthday",
	"tommy"
];
msg.lang = 'en-US';