function startTyping() {
  const text = document.getElementById('userText').value;
  const typingText = document.getElementById('typingText');
  typingText.innerHTML = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      typingText.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
}
