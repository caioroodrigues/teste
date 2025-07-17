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

noBtn.addEventListener("mouseenter", () => {
  const dialogRect = dialogBox.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = dialogBox.clientWidth - noBtn.offsetWidth;
  const maxY = dialogBox.clientHeight - noBtn.offsetHeight - 50; // margem do título

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY) + 80; // desce pra não sobrepor o título

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});
