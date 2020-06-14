const state = {
  isModalOpen: false
}
const modal = document.getElementById("modal")
const modalOpenButton = document.getElementById("show-modal-button")
const modalCloseButton = document.getElementById("close-modal-button")

function openModal() {
  state.isModalOpen = true;
  modal.classList.toggle("modal--visible")
  gsap.to("#modal", {
    duration: .1,
    scale: 1
  });
}

function closeModal() {
  state.isModalOpen = false
  gsap.to("#modal", {
    duration: .1,
    scale: 0,
    onComplete: () => modal.classList.toggle("modal--visible")
  });
}


modalOpenButton.onclick = () => {
  openModal()
}
modalCloseButton.onclick = () => {
  closeModal()
}
document.addEventListener("click", (event) => {
  let targetElement = event.target;
  do {
    if (targetElement === modal || targetElement === modalOpenButton) {
      return;
    }
    targetElement = targetElement.parentNode;
  }
  while (targetElement)
  if (state.isModalOpen) {
    closeModal()
  }
});
