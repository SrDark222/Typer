document.getElementById("generateBtn").addEventListener("click", () => {
  const text = document.getElementById("userText").value.trim();
  if (!text) {
    alert("Preencha o campo de texto.");
    return;
  }

  document.getElementById("loadingBar").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  setTimeout(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 100;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Segoe UI";
    ctx.fillStyle = "#00ffff";
    ctx.fillText(text, 20, 60);

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      document.getElementById("gifPreview").src = url;
      document.getElementById("downloadLink").href = url;

      document.getElementById("loadingBar").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");
    }, "image/gif");
  }, 2000);
});
