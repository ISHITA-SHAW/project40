var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes,bike1,bike2,bike3,bike4
var bike, bike1i, bike2i, bike3i, bike4i,track;

function preload(){
  bike1i = loadImage("images/bike1.png");
  bike2i = loadImage("images/bike2.png");
  bike3i = loadImage("images/bike3.png");
  bike4i = loadImage("images/bike4.png");
  track = loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
