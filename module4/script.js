(function (){
 
 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 for(name in names){
  var x = names[name].charAt(0);
  if(x == 'j' || x == 'J'){
    window.byeSpeaker.speak(names[name]);
  }
  else
  {
    window.helloSpeaker.speak(names[name]);
  }
 }

})();