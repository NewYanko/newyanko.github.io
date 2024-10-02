import UI from "./UI/index.js";

$(() => {
  setTimeout(() => {
    HandleHash();
  }, 250);
  window.addEventListener("hashchange", HandleHash);
});

function HandleHash() {
  console.log("Hash Refresh");
  switch (window.location.hash) {
    case "#home":
      UI.Paging.Navigate("home");
      break;

    case "#about":
      UI.Paging.Navigate("about");
      break;

    default:
      window.location.hash = "#home";
      break;
  }
}
