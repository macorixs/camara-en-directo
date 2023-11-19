// Obtén acceso a la cámara de video
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    // Aquí puedes usar el flujo de video, por ejemplo, para mostrarlo en un elemento de video HTML
    var videoElement = document.createElement('video');
    document.body.appendChild(videoElement);
    videoElement.srcObject = stream;
    videoElement.play();
  })
  .catch(function (error) {
    console.error('Error al acceder a la cámara:', error);
  });


// Obtener el acceso al micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    // Crear un objeto MediaRecorder para grabar el audio
    const mediaRecorder = new MediaRecorder(stream);
    
    // Crear una matriz para almacenar los fragmentos de audio
    const chunks = [];

    // Escuchar eventos de datos disponibles
    mediaRecorder.ondataavailable = function(event) {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    // Escuchar el evento de parada de grabación
    mediaRecorder.onstop = function() {
      // Combinar los fragmentos de audio en un solo Blob
      const blob = new Blob(chunks, { 'type' : 'audio/wav' });

      // Aquí puedes hacer algo con el Blob, como reproducirlo o subirlo al servidor
    };

    // Comenzar a grabar cuando se inicia la grabación
    mediaRecorder.start();

    // Detener la grabación después de un tiempo (por ejemplo, 5 segundos)
    setTimeout(function() {
      mediaRecorder.stop();
    }, 5000);
  })
  .catch(function(err) {
    console.log('Error al acceder al micrófono: ' + err);
  });





 






