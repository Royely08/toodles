function openWindow() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("show");
  }, 10); // slight delay to trigger transition
}

function openWindow_openLetters() {
    const popup = document.getElementById("popup1");
    popup.classList.add("show");
    popup.classList.remove("hidden1");
}

function closeWindow_openLetters() {
    const popup = document.getElementById("popup1");
    popup.classList.remove("show");
    popup.classList.add("hidden1");
}

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function showPopup(imageSrc, audioSrc) {
  const popup = document.getElementById("popup2");
  const popupImage = document.getElementById("popupImage");
  const popupAudio = document.getElementById("popupAudio");

  popupImage.src = imageSrc;
  popupAudio.src = audioSrc;
  popup.classList.remove("hidden2");
  popup.classList.add("show");
}

function closePopup2() {
  const popup = document.getElementById("popup2");
  const popupAudio = document.getElementById("popupAudio");

  popup.classList.remove("show");
  popup.classList.add("hidden2");
  popupAudio.pause();
  popupAudio.currentTime = 0;
}

function playAudio() {
  const popupAudio = document.getElementById("popupAudio");
  popupAudio.play();
}

function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("show");
  }, 10); // Slight delay to trigger transition
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("show");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 400); // Match transition duration
}