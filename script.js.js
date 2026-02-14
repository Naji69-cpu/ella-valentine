function moveButton() {
  const button = document.querySelector('.no');
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * window.innerHeight - 50;
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function showLove() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}