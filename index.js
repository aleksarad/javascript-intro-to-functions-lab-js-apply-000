

// reguluar
function shout(string) {
  return string.toUpperCase();
} 

// arrow
var whisper = (string) => { 
  return string.toLowerCase(); 
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  if(str === str.toLowerCase()) {
    return `I can't hear you!`;
  }
  else if(str === `I love you, Grandma.`) {
    return `I love you, too.`;
  }
  return `YES INDEED!`;
}