

//   sayHiToGrandma(string)
//     5) returns "I can't hear you!" if `string` is lowercase
//     6) returns "YES INDEED!" if `string` is uppercase
//     7) returns "I love you, too." if `string` is "I love you, Grandma."`

function sayHiToGrandma(str){
  if(str === str.toLowerCase()) {
    return `I can't hear you!`;
  }
  else if(str === `I love you, Grandma.`) {
    return `I love you, too.`;
  }
  return `YES INDEED!`;
}

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