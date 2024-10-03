import Paging from "./UI/Paging.js";
import Utils from "./UI/Utils.js";

$(() => {
  setTimeout(() => {
    HandleHash();
  }, 250);
  window.addEventListener("hashchange", HandleHash);

  const MinClick = 100;
  let LastMouseDown = 0;

  $("a").on("mousedown", () => {
    $("#click-in")[0].currentTime = 0;
    $("#click-in")[0].play();
    LastMouseDown = Date.now();
  });

  $("a").on("mouseup", async () => {
    if (LastMouseDown + MinClick > Date.now())
      await Utils.Delay(LastMouseDown + MinClick - Date.now());

    $("#click-out")[0].currentTime = 0;
    $("#click-out")[0].play();
  });
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
