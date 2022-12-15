const hambur = document.querySelector("#hamburger");
const header = document.querySelector("#header");
console.log(hambur)
console.log(header)
hambur.addEventListener("click", () => {
    header.classList.toggle("active");
});