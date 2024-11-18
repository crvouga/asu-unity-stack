export class AddToCalendarCallbackRegistry {
  constructor() {
    this.callback = null;
  }

  async call() {
    if (typeof this.callback === "function") {
      return this.callback?.();
    }
    return null;
  }

  async register(callback) {
    this.callback = callback;
  }
}

window.AddToCalendarCallbackRegistry = AddToCalendarCallbackRegistry;
