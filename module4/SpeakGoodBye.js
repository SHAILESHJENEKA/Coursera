(function (name){
  
  var byeSpeaker = {};
  
  var speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
     console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(name);