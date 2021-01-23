const version = "1.1.0";

let settings = {
  buttonsToggled: true,
};

const css = `body.gm-toggle-messages-buttons .buttons-3JBrkn {
  display: none;
}`;

let style;

const updateContextItem = async (val) => {
  try {
    await goosemod.patcher.contextMenu.remove("toggle-message-buttons");

    goosemod.patcher.contextMenu.add("textarea-context", {
      id: "toggle-message-buttons",
      label: `${val ? "Disable" : "Enable"} Buttons`,
      action: () => {
        settings.buttonsToggled = !settings.buttonsToggled;
        updateContextItem(settings.buttonsToggled);

        document.body.classList[val ? "add" : "remove"](
          "gm-toggle-messages-buttons"
        );
      },
    });
  } catch (err) {
    goosemodScope.showToast("An error has ocurred!", { type: "error" });
    goosemodScope.logger.debug(err);
  }
};

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    updateContextItem(settings.buttonsToggled);
  },

  onRemove: async () => {
    goosemodScope.patcher.contextMenu.remove("toggle-message-buttons");
    document.body.classList.remove("gm-toggle-messages-buttons");

    style.remove();
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    updateContextItem(settings.buttonsToggled);
    document.body.classList[settings.buttonsToggled ? "remove" : "add"](
      "gm-toggle-messages-buttons"
    );
  },





}
};
