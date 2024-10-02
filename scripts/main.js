import Paging from "./UI/Paging.js";

$(() => {
  setTimeout(() => {
    HandleHash();
  }, 250);
  window.addEventListener("hashchange", HandleHash);
});

function HandleHash() {
  switch (window.location.hash) {
    case "#home":
      Paging.Navigate("home");
      break;

    case "#about":
    case "#portfolio":
    case "#skills":
    case "#experience":
      Paging.Navigate(window.location.hash.slice(1));
      break;

    default:
      window.location.hash = "#home";
      return;
  }

  document.title = `yanko | ${window.location.hash.slice(1)}`;
}
