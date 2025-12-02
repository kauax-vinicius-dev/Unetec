document.addEventListener("DOMContentLoaded", () => {
    const textName = document.querySelector(".text-name");
    const userName = localStorage.getItem("email");

    textName.textContent = userName;
})