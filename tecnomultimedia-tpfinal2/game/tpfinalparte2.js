let juego;
let dastan, traitor;
let secuaces = [];
let combustibles = [];
let song;
let inicioBg, instructionsBg, ganasteBg, perdisteBg, creditsBg;  // Variables para almacenar las imágenes de fondos
let sandBg,riverBg;  // Variables para almacenar las imágenes de fondo Juego
let blueRug, redRug, minion, sword, fireball, magicFuel, dagger;

let songStarted = false; // Variable para controlar el estado del sonido


function preload() {
  // Cargar el sonido
  song = loadSound('assets/Song.mp3');
  
// Cargar la imagen de fondo para la pantalla de inicio
  inicioBg = loadImage('assets/Inicio.jpg');
  instructionsBg = loadImage('assets/Instructions.jpg');
  creditsBg = loadImage('assets/Creditos.jpg');
  ganasteBg = loadImage('assets/Ganaste.jpg');
  perdisteBg = loadImage('assets/Perdiste.jpg');
  sandBg = loadImage('assets/Sand.jpg');
  riverBg = loadImage('assets/Rio.jpg');
  blueRug = loadImage('assets/Dastan.png');
  redRug = loadImage('assets/Traitor.png');
  minion = loadImage('assets/MinionBoat.png');
  sword = loadImage('assets/Sword.png');
  fireball = loadImage('assets/Fireball.png');
  magicFuel = loadImage('assets/MagicFuel.png');
  dagger = loadImage('assets/Dagger.png');


}
function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.setup();
  userStartAudio();
}

function draw() {
  juego.draw();
}

function keyPressed() {
  // Disparo de Dastan
  if (key === ' ') {
    let projectile = new Projectile(dastan.x, dastan.y, -5);
    juego.dastanProjectiles.push(projectile);
  }
  
  // Reiniciar juego con la tecla 'r'
  if (key === 'r' || key === 'R') {
    juego.resetGame();
    juego.mainScreen.gameState = "Juego"; // Reinicia el juego y cambia el estado
    song.play(); // Reinicia la música cuando se presiona 'R'
  }
   // Volver a la pantalla de inicio si se presiona la tecla 'i' en Ganaste o Perdiste
  if ((juego.mainScreen.gameState === "Ganaste" || juego.mainScreen.gameState === "Perdiste") && (key === 'i' || key === 'I')) {
    juego.mainScreen.gameState = "Inicio"; // Regresa a la pantalla de inicio
    song.stop(); // Detiene la musica al volver a inicio
  }
 if (key === 's' || key === 'S') {
    song.play(); // Si esta en silencio puedo tocar s y devolver la musica
  }
  }
// Evento de click del mouse
function mousePressed() {
  juego.botones.handleMousePressed();
}