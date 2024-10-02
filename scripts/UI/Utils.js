export default {
  Delay: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  TicketSystem: class {
    _LastCompleteTicket = 0;
    _DispensedTicket = 0;
    _InternalEmitter = new EventEmitter();

    GetTicket() {
      return ++this._DispensedTicket;
    }

    CanRun(Ticket) {
      return this._LastCompleteTicket + 1 == Ticket;
    }

    WaitForRun(Ticket) {
      return new Promise((Resolve, _Reject) => {
        if (this.CanRun(Ticket)) return Resolve();
        this._InternalEmitter.on("InQueue-" + Ticket, Resolve);
      });
    }

    TicketComplete(Ticket) {
      this._LastCompleteTicket = Ticket;
      // Signal that next ticket is ready to run
      this._InternalEmitter.emit("InQueue-" + (Ticket + 1));
    }
  },
};
