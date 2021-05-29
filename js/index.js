window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let section = document.querySelector("section");
  aside.classList.toggle("sticky", window.scrollY > 0);
});
