
let currentText = '';
let i = 0;

function startProcess() {
  currentText = document.getElementById('userText').value.trim();
  if (!currentText) {
    alert("Preencha o campo antes de gerar!");
    return;
  }

  const typingText = document.getElementById('typingText');
  typingText.innerHTML = '';
  i = 0;
  document.getElementById('loading').style.display = 'block';
  typeAndGenerate();
}

function typeAndGenerate() {
  if (i < currentText.length) {
    document.getElementById('typingText').innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeAndGenerate, 100);
  } else {
    gerarGIF();
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
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "typer_dk.gif";
      a.click();
      document.getElementById('loading').style.display = 'none';
    });
    gif.render();
  });
}
