import Utils from "./Utils.js";

const TransitionTime = 600;

const NavigationTickets = new Utils.TicketSystem();

export default {
  Navigate: async (PageID) => {
    if (PageID == $(`[data-page][data-active]`).data("page")) return;
    const Ticket = NavigationTickets.GetTicket();
    await NavigationTickets.WaitForRun(Ticket);

    const OldPage = $(`[data-page][data-active]`);
    const NewPage = $(`[data-page="${PageID}"]`);

    OldPage.addClass("wiped");
    NewPage.addClass("wiped");
    NewPage.attr("data-active", "");
    await Utils.Delay(TransitionTime / 2);

    OldPage.removeAttr("data-active");

    NewPage.removeClass("wiped");
    OldPage.removeClass("wiped");
    await Utils.Delay(TransitionTime);
    NavigationTickets.TicketComplete(Ticket);
  },
};
