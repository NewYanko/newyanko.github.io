import UI from "./index.js";

const TransitionTime = 600;
var isNavigating = false;
export default {
  Navigate: async (PageID) => {
    if (isNavigating) return;
    isNavigating = true;

    const OldPage = $(`[data-page][data-active]`);
    const NewPage = $(`[data-page="${PageID}"]`);

    OldPage.addClass("wiped");
    NewPage.addClass("wiped");
    NewPage.attr("data-active", "");
    await UI.Utils.Delay(TransitionTime / 2);

    OldPage.removeAttr("data-active");

    NewPage.removeClass("wiped");
    OldPage.removeClass("wiped");
    await UI.Utils.Delay(TransitionTime);
    isNavigating = false;
  },
};
