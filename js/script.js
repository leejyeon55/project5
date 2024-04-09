//모바일로 이동
const moblie = $(".moblie");
let moblieEvent = 0;

moblie.on("click", function (e) {
  e.preventDefault();
  mobileEvent = 1;
  pageChage(mobileEvent);
});
function pageChage(mobileEvent) {
  if (window.devicePixelRatio > 1 || mobileEvent > 0) {
    location.href = "./mobile/index.html";
  }
}