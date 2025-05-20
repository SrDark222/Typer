
let currentText = '';
let i = 0;

function startTyping() {
  currentText = document.getElementById('userText').value;
  const typingText = document.getElementById('typingText');
  typingText.innerHTML = '';
  i = 0;
  type();
}

function type() {
  if (i < currentText.length) {
    document.getElementById('typingText').innerHTML += currentText.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

function gerarGIF() {
  const element = document.getElementById('typingBox');
  const gif = new GIF({
    workers: 2,
    quality: 10,
    workerScript: 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js'
  });

  html2canvas(element).then(canvas => {
    gif.addFrame(canvas, {delay: 200});
    gif.on('finished', function(blob) {
      window.open(URL.createObjectURL(blob));
    });
    gif.render();
  });
}

: 200});
    gif.on('finished', function(blob) {
      const url = URL.createObjectURL(blob);
      document.getElementById('loading').style.display = 'none';
      window.open(url, '_blank');
    });
    gif.render();
  });
}
