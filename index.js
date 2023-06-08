document.addEventListener("DOMContentLoaded", function() {
    if (window.File && window.FileReader && window.FileList) {
      console.log("Todas las APIs soportadas");
    } else {
      alert("La API File no es soportada por este navegador");
    }
  
    var videoInput = document.getElementById('videoInput');
    var myVideo = document.getElementById('myVideo');
  
    videoInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
  
      if (file) {
        var reader = new FileReader();
  
        reader.onload = function(event) {
          myVideo.src = event.target.result;
          myVideo.play();
          alert("Espere un momento mientras se carga el vídeo");
        };
  
        reader.readAsDataURL(file);
      }
    });
  
    // Botones con otras funcionalidades
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var volumeUp = document.getElementById('volumeUp');
    var volumeDown = document.getElementById('volumeDown');
    var forward = document.getElementById('forward');
    var backward = document.getElementById('backward');
  
    play.addEventListener('click', function() {
      myVideo.play();
    });
  
    pause.addEventListener('click', function() {
      myVideo.pause();
    });
  
    volumeUp.addEventListener('click', function() {
      myVideo.volume += 0.2;
    });
  
    volumeDown.addEventListener('click', function() {
      myVideo.volume -= 0.2;
    });
  
    forward.addEventListener('click', function() {
      myVideo.currentTime += 10;
    });
  
    backward.addEventListener('click', function() {
      myVideo.currentTime -= 10;
    });
  });
  