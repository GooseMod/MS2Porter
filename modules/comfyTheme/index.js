const version = "1.1.1";

let settings = {
  statusIcon: false,
  statusMask: false,
  comfyAvatar: true,
  coloredEmoji: true,
  userButtons: "#096dc0",
  chatButtons: "#6E85D3",
  circles: true,
  tooltips: true,
  seperators: false,
  watermark: false,
};

let style;

let cssStatusIcon;
let cssStatusMask;
let cssComfyAvatar;
let cssColoredEmoji;
let cssUserButtons;
let cssChatButtons;
let cssCircles;
let cssTooltips;
let cssSeperators;
let cssWatermark;

const setStatusIcon = (value) => {
  if (value) {
    cssStatusIcon = document.createElement("style");
    cssStatusIcon.appendChild(
      document.createTextNode(`:root {
        --popout-status-icon: block !important;
      }`)
    );
    document.head.appendChild(cssStatusIcon);
  } else {
    try {
      cssStatusIcon.remove();
    } catch {}
  }
};
const setStatusMask = (value) => {
  if (value) {
    cssStatusMask = document.createElement("style");
    cssStatusMask.appendChild(
      document.createTextNode(`:root {
        --popout-status-mask: url(#svg-mask-avatar-status-round-80) !important;
      }`)
    );
    document.head.appendChild(cssStatusMask);
  } else {
    try {
      cssStatusMask.remove();
    } catch {}
  }
};
const setComfyAvatar = (value) => {
  if (!value) {
    cssComfyAvatar = document.createElement("style");
    cssComfyAvatar.appendChild(
      document.createTextNode(`:root {
        --avatar-radius: 100% !important;
      }`)
    );
    document.head.appendChild(cssComfyAvatar);
  } else {
    try {
      cssComfyAvatar.remove();
    } catch {}
  }
};
const setColoredEmoji = (value) => {
  if (!value) {
    cssColoredEmoji = document.createElement("style");
    cssColoredEmoji.appendChild(
      document.createTextNode(`:root {
        --colored-emoji: grayscale(100%) !important;
      }`)
    );
    document.head.appendChild(cssColoredEmoji);
  } else {
    try {
      cssColoredEmoji.remove();
    } catch {}
  }
};
const setUserButtons = (value) => {
  try {
    cssUserButtons.remove();
  } catch {}

  if (value != "#096dc0") {
    cssUserButtons = document.createElement("style");
    cssUserButtons.appendChild(
      document.createTextNode(`:root {
        --user-buttons-color: ${value} !important;
      }`)
    );
    document.head.appendChild(cssUserButtons);
  }
};
const setChatButtons = (value) => {
  try {
    cssChatButtons.remove();
  } catch {}

  if (value != "#6E85D3") {
    cssChatButtons = document.createElement("style");
    cssChatButtons.appendChild(
      document.createTextNode(`:root {
        --chat-buttons: ${value} !important;
      }`)
    );
    document.head.appendChild(cssChatButtons);
  }
};
const setCircles = (value) => {
  if (!value) {
    cssCircles = document.createElement("style");
    cssCircles.appendChild(
      document.createTextNode(`:root {
        --role-circle: 0px !important;
      }`)
    );
    document.head.appendChild(cssCircles);
  } else {
    try {
      cssCircles.remove();
    } catch {}
  }
};
const setTooltips = (value) => {
  if (!value) {
    cssTooltips = document.createElement("style");
    cssTooltips.appendChild(
      document.createTextNode(`:root {
        --tooltips: none !important;
      }`)
    );
    document.head.appendChild(cssTooltips);
  } else {
    try {
      cssTooltips.remove();
    } catch {}
  }
};
const setSeperators = (value) => {
  if (value) {
    cssSeperators = document.createElement("style");
    cssSeperators.appendChild(
      document.createTextNode(`:root {
        --seperators: block !important;
      }`)
    );
    document.head.appendChild(cssSeperators);
  } else {
    try {
      cssSeperators.remove();
    } catch {}
  }
};
const setWatermark = (value) => {
  if (value) {
    cssWatermark = document.createElement("style");
    cssWatermark.appendChild(
      document.createTextNode(`:root {
        --discord-logo: block !important;
      }`)
    );
    document.head.appendChild(cssWatermark);
  } else {
    try {
      cssWatermark.remove();
    } catch {}
  }
};

export default {
goosemodHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/NYRI4/Comfy-theme/main/BetterDiscord/comfy.theme.css");`
      )
    );
    document.head.appendChild(style);

    setStatusIcon(settings.statusIcon);
    setStatusMask(settings.statusMask);
    setComfyAvatar(settings.comfyAvatar);
    setColoredEmoji(settings.coloredEmoji);
    setUserButtons(settings.userButtons);
    setChatButtons(settings.chatButtons);
    setCircles(settings.circles);
    setTooltips(settings.tooltips);
    setSeperators(settings.seperators);
    setWatermark(settings.watermark);
  },

  onLoadingFinished: async () =>
    goosemodScope.settings.createItem("Comfy Theme", [
      `(v${version})`,
      {
        type: "header",
        text: "BetterAvatar Popout",
      },
      {
        type: "toggle",
        text: "User Modal Status Icon",
        onToggle: (value) => {
          settings.statusIcon = value;
          setStatusIcon(value);
        },
        isToggled: () => settings.statusIcon,
      },
      {
        type: "toggle",
        text: "User Modal Status Mask",
        onToggle: (value) => {
          settings.statusMask = value;
          setStatusMask(value);
        },
        isToggled: () => settings.statusMask,
      },
      {
        type: "toggle",
        text: "Comfy User Modal Avatar",
        subtext:
          "Unfortunately, text inputs are not yet avaiable for settings. Disable to use the normal radius of user modal avatars. (Not available while user modal status masks are enabled.)",
        onToggle: (value) => {
          settings.comfyAvatar = value;
          setComfyAvatar(value);
        },
        isToggled: () => settings.comfyAvatar,
      },
      {
        type: "header",
        text: "Other Settings",
      },
      {
        type: "toggle",
        text: "Colored Emoji Picker",
        onToggle: (value) => {
          settings.coloredEmoji = value;
          setColoredEmoji(value);
        },
        isToggled: () => settings.coloredEmoji,
      },
      {
        type: "text-and-color",
        text: "User Settings, Mute and Deafen Buttons Color",
        subtext: "Default: rgb(9,109,192)",
        oninput: (value) => {
          settings.userButtons = value;
          setUserButtons(value);
        },
      },
      {
        type: "text-and-color",
        text: "User Buttons Color",
        subtext: "Default: rgb(110,133,211)",
        oninput: (value) => {
          settings.chatButtons = value;
          setChatButtons(value);
        },
      },
      {
        type: "toggle",
        text: "Circles Next to Role Names",
        onToggle: (value) => {
          settings.circles = value;
          setCircles(value);
        },
        isToggled: () => settings.circles,
      },
      {
        type: "toggle",
        text: "Tooltips",
        onToggle: (value) => {
          settings.tooltips = value;
          setTooltips(value);
        },
        isToggled: () => settings.tooltips,
      },
      {
        type: "toggle",
        text: "Seperators",
        onToggle: (value) => {
          settings.seperators = value;
          setSeperators(value);
        },
        isToggled: () => settings.seperators,
      },
      {
        type: "toggle",
        text: "Discord Watermark",
        onToggle: (value) => {
          settings.watermark = value;
          setWatermark(value);
        },
        isToggled: () => settings.watermark,
      },
    ]),

  onRemove: async () => {
    goosemodScope.settings.removeItem("Comfy Theme");

    style.remove();
    try {
      cssStatusIcon.remove();
    } catch {}
    try {
      cssStatusMask.remove();
    } catch {}
    try {
      cssComfyAvatar.remove();
    } catch {}
    try {
      cssColoredEmoji.remove();
    } catch {}
    try {
      cssUserButtons.remove();
    } catch {}
    try {
      cssChatButtons.remove();
    } catch {}
    try {
      cssCircles.remove();
    } catch {}
    try {
      cssTooltips.remove();
    } catch {}
    try {
      cssSeperators.remove();
    } catch {}
    try {
      cssWatermark.remove();
    } catch {}
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    setStatusIcon(settings.statusIcon);
    setStatusMask(settings.statusMask);
    setComfyAvatar(settings.comfyAvatar);
    setColoredEmoji(settings.coloredEmoji);
    setUserButtons(settings.userButtons);
    setChatButtons(settings.chatButtons);
    setCircles(settings.circles);
    setTooltips(settings.tooltips);
    setSeperators(settings.seperators);
    setWatermark(settings.watermark);
  },





}
};
