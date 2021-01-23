const version = "1.3.0";

let keydownHandler;

export default {
goosemodHandlers: {
  onImport: async () => {
    const createModal = async () => {
      const { React } = goosemodScope.webpackModules.common;
      const { findByDisplayName, findByProps } = goosemodScope.webpackModules;

      const Text = findByDisplayName("Text");

      (0, findByProps("openModal").openModal)((e) => {
        return React.createElement(
          findByDisplayName("ConfirmModal"),
          {
            header: "Relaunch",
            confirmText: "Relaunch",
            cancelText: findByProps("Messages").Messages.CANCEL,
            onClose: () => {},
            onCancel: e.onClose,
            onConfirm: () => {
              return DiscordNative.app.relaunch();
            },
            transitionState: e.transitionState,
          },
          React.createElement(
            Text,
            { size: Text.Sizes.SIZE_16 },
            "Are you sure you want to relaunch Discord? This will completely terminate Discord and start the updater."
          )
        );
      });
    };

    keydownHandler = async (event) => {
      if (event.code == "F4") {
        event.preventDefault();
        createModal();
      }
    };

    goosemodScope.settings.createItem(
      "Relaunch",
      [""],
      async () => {
        createModal();
      },
      true
    );

    document.addEventListener("keydown", keydownHandler);
  },

  onRemove: async () => {
    goosemod.settings.removeItem("Relaunch");
    document.removeEventListener("keydown", keydownHandler);
  },





}
};
