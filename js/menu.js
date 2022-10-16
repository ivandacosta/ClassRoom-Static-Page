const headerBlock = document.getElementById("header");
if (headerBlock) {
  (function openMenu() {
    let burguer = document.getElementById("burguer-menu");
    burguer.addEventListener("change", function () {
      if (burguer.checked == true) {
        document.querySelector("body").classList.add("hidden");
      } else {
        document.querySelector("body").classList.remove("hidden");
      }
    });
  })();

  (function scrollMenu() {
    let header = document.getElementById("header");
    window.addEventListener("scroll", achataMenu);
    window.addEventListener("DOMContentLoaded", achataMenu);
    function achataMenu(scrollTop = 0) {
      scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 30) {
        header.classList.add("on");
      } else {
        header.classList.remove("on");
      }
    }
  })();
}
