let version = "2.7.0";

export default {
goosemodHandlers: {
  onImport: async function () {
    goosemodScope.logger.debug("visualTweaks", "Enabling Visual Tweaks");

    goosemodScope.tweaks = {
      removeHelpButton: true,
      removeEmojiUpsell: false,
      squareAvatars: true,
      noMemberlistAvatars: false,
      fixFolderColorPicker: true,
    };

    let sheet = window.document.styleSheets[0];

    sheet.insertRule(
      `body.square-avatars .avatar-1BDn8e {
      border-radius: 0px;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-emoji-popups .container-ZRw2kD {
      display:none;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-emoji-popups .emojiContainer-3X8SvE {
      cursor:default;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-memberlist-avatars .avatar-3uk_u9 {
      width: 5px;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-memberlist-avatars .avatar-3uk_u9 > div > svg > foreignObject {
      display: none;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-memberlist-avatars .avatar-3uk_u9 > div > svg > rect {
      transform: translate(-22px, -10px);
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.no-help-button a[href="https://support.discord.com"] > div[role="button"] {
      display: none;
    }`,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `body.fix-folder-color-picker .container-3sNMIc {
        flex-wrap: inherit
    }`,
      sheet.cssRules.length
    );

    let tweakFunctions = {
      removeHelpButton: {
        enable: () => {
          document.body.classList.add("no-help-button");
          // document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'none';
        },

        disable: () => {
          document.body.classList.remove("no-help-button");
          // document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'flex';
        },
      },

      removeEmojiUpsell: {
        enable: () => {
          document.body.classList.add("no-emoji-popups");
        },

        disable: () => {
          document.body.classList.remove("no-emoji-popups");
        },
      },

      squareAvatars: {
        enable: () => {
          document.body.classList.add("square-avatars");
        },

        disable: () => {
          document.body.classList.remove("square-avatars");
        },
      },

      noMemberlistAvatars: {
        enable: () => {
          document.body.classList.add("no-memberlist-avatars");
        },

        disable: () => {
          document.body.classList.remove("no-memberlist-avatars");
        },
      },

      fixFolderColorPicker: {
        enable: () => {
          document.body.classList.add("fix-folder-color-picker");
        },

        disable: () => {
          document.body.classList.remove("fix-folder-color-picker");
        },
      },
    };

    goosemodScope.enableTweak = (tweakName) => {
      tweakFunctions[tweakName].enable();

      goosemodScope.tweaks[tweakName] = true;
    };

    goosemodScope.disableTweak = (tweakName) => {
      tweakFunctions[tweakName].disable();

      goosemodScope.tweaks[tweakName] = false;
    };

    goosemodScope.setTweak = (tweakName, value) => {
      if (value === true) {
        goosemodScope.enableTweak(tweakName);
      } else {
        goosemodScope.disableTweak(tweakName);
      }
    };
  },

  onLoadingFinished: async function () {
    for (let t in goosemodScope.tweaks) {
      if (goosemodScope.tweaks[t] === true) goosemodScope.enableTweak(t);
    }

    goosemodScope.settings.createItem("Visual Tweaks", [
      `(v${version})`,

      {
        type: "header",
        text: "Individual Minor Tweaks",
      },
      {
        type: "toggle",
        text: "Hide Help Button",
        subtext: "Hides the help button in the top right corner",
        onToggle: (c) => {
          goosemodScope.setTweak("removeHelpButton", c);
        },
        isToggled: () => goosemodScope.tweaks["removeHelpButton"],
      },
      {
        type: "toggle",
        text: "Disable Emoji Click Pop-up",
        subtext: "Disables the pop-up when clicking emojis",
        onToggle: (c) => {
          goosemodScope.setTweak("removeEmojiUpsell", c);
        },
        isToggled: () => goosemodScope.tweaks["removeEmojiUpsell"],
      },
      {
        type: "toggle",
        text: "Square Avatars",
        subtext:
          "Makes avatars for messages square instead of circle (cozy only)",
        onToggle: (c) => {
          goosemodScope.setTweak("squareAvatars", c);
        },
        isToggled: () => goosemodScope.tweaks["squareAvatars"],
      },
      {
        type: "toggle",
        text: "[WIP] No Member List Avatars",
        subtext: "Hides avatars in the member list",
        onToggle: (c) => {
          goosemodScope.setTweak("noMemberlistAvatars", c);
        },
        isToggled: () => goosemodScope.tweaks["noMemberlistAvatars"],
      },
      {
        type: "toggle",
        text: "Fix Folder Color Picker",
        subtext: "Fixes the folder color picker being misaligned.",
        onToggle: (c) => {
          goosemodScope.setTweak("fixFolderColorPicker", c);
        },
        isToggled: () => goosemodScope.tweaks["fixFolderColorPicker"],
      },
    ]);
  },

  onRemove: async function () {
    for (let t in goosemodScope.tweaks) {
      if (goosemodScope.tweaks[t] === true) goosemodScope.disableTweak(t);
    }

    let settingItem = goosemodScope.settings.items.find(
      (x) => x[1] === "Visual Tweaks"
    );
    goosemodScope.settings.items.splice(
      goosemodScope.settings.items.indexOf(settingItem),
      1
    );
  },

  getSettings: async function () {
    return [goosemodScope.tweaks];
  },
  loadSettings: async function ([_tweaks]) {
    goosemodScope.tweaks = _tweaks;

    for (let t in goosemodScope.tweaks) {
      try {
        // Some tweaks might have been removed so wrap in try catch
        goosemodScope.setTweak(t, goosemodScope.tweaks[t]);
      } catch (e) {
        console.log(e);
      }
    }
  },

  logRegionColor: "darkred",



}
};
