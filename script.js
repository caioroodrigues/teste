const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dialogBox = document.querySelector(".dialog-box");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="dialog-box">
      <h1>Você aceitou! 💍❤️</h1>
      <p>Agora não tem mais volta 😅</p>
    </div>
  `;
});

// Função para mover o botão "Não" dentro da caixinha
function moveNoButton() {
  const maxX = dialogBox.clientWidth - noBtn.offsetWidth;
  const maxY = dialogBox.clientHeight - noBtn.offsetHeight - 60; // desconta título

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY) + 80;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Desktop: mouse passa por cima
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile: toca no botão
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // evita clicar acidentalmente
  moveNoButton();
});
