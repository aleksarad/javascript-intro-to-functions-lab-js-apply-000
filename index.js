

//   sayHiToGrandma(string)
//     5) returns "I can't hear you!" if `string` is lowercase
//     6) returns "YES INDEED!" if `string` is uppercase
//     7) returns "I love you, too." if `string` is "I love you, Grandma."`

function

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