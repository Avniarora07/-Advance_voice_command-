x = 0;
y = 0;

draw_apple = "";

speak_data = "";
to_number  = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  img = load_image('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
      }
 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);
 
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if (Number.isInteger(to_number)) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      document.getElementById("status").innerHTML = "Started drawing circle "; 
      draw_apple= "set";
    } 
else{
  document.getElementById("status").innerHTML = "The Speech has not recognized a number" + content;
}
       
function setup() {
  screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
    for(var i = 1; i<= to_number; i++)
  {
  
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      img(apple, x, y, 50, 50);
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    
  }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}





