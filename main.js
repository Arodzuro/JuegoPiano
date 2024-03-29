// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key','high-c-sharp-key','high-d-key','high-d-sharp-key','high-e-key','high-f-key','high-f-sharp-key','high-g-key','high-g-sharp-key','high-a-key','high-a-sharp-key','high-b-key','high-high-c-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

function keyPlay(event){
  event.target.style.backgroundColor = '#6df0c2';
};

function keyReturn(event){
  event.target.style.backgroundColor = '';
};

function controlEventos(note){
  note.addEventListener('mousedown',keyPlay);
  note.addEventListener('mouseup',keyReturn);
};

// Define un objeto que mapea los id de las teclas a las rutas de los archivos de sonido
const soundFiles = {
  'c-key':'./notas/Do3.mp3',
  'c-sharp-key': './notas/Do_sostenido3.mp3',
  'd-key':'./notas/Re3.mp3',
  'd-sharp-key': './notas/Re_sostenido3.mp3',
  'e-key':'./notas/Mi3.mp3',
  'f-key': './notas/Fa3.mp3',
  'f-sharp-key': './notas/Fa_sostenido3.mp3',
  'g-key': './notas/Sol3.mp3',
  'g-sharp-key': './notas/Sol_sostenido3.mp3',
  'a-key': './notas/La3.mp3',
  'a-sharp-key': './notas/La_sostenido3.mp3',
  'b-key': './notas/Si3.mp3',
  'high-c-key': './notas/Do4.mp3',
  'high-c-sharp-key': './notas/Do_sostenido4.mp3',
  'high-d-key': './notas/Re4.mp3',
  'high-d-sharp-key': './notas/Re_sostenido4.mp3',
  'high-e-key': './notas/Mi4.mp3',
  'high-f-key': './notas/Fa4.mp3',
  'high-f-sharp-key': './notas/Fa_sostenido4.mp3',
  'high-g-key': './notas/Sol4.mp3',
  'high-g-sharp-key': './notas/Sol_sostenido4.mp3',
  'high-a-key': './notas/La4.mp3',
  'high-a-sharp-key': './notas/La_sostenido4.mp3',
  'high-b-key': './notas/Si4.mp3',
  'high-high-c-key': './notas/Do5.mp3'
};

// Function to play the sound of the piano key
function playSound(id) {
  const soundFile = soundFiles[id];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

// Loop through each note and add event listeners for mouse events
notes.forEach(function(note) {
  controlEventos(note);
  note.addEventListener('click', function() {
    playSound(note.id);
  });
});

// Write a loop that runs the array elements through the function
notes.forEach(controlEventos);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
};

// Write anonymous event handler property and function for the second progress button

nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML ='DEAR';
  document.getElementById('word-six').innerHTML ='FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
// Write anonymous event handler property and function for the third progress button

nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  lastLyric.style.display = 'none';
};
// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}


