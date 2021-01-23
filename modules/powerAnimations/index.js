const version = "2.1.0";

let settings = {
  pings: true,
  modals: true,
  profile: true,
  channelMute: true,
  call: true,
  pins: true,
  update: true,
  userButtons: true,
};

let stylePing;
let styleModals;
let styleProfile;
let styleChannelMute;
let styleCall;
let stylePins;
let styleUpdate;
let styleUserButtons;

const setPing = (value) => {
  try {
    stylePing.remove();
  } catch {}

  if (value) {
    stylePing = document.createElement("style");
    stylePing.appendChild(
      document.createTextNode(`.numberBadge-2s8kKX {
        animation: animatedPing 1.5s infinite ease-in-out;
      }

      @keyframes animatedPing {
        0% {
          transform: rotate(-15deg);
        }
        50% {
          transform: rotate(15deg) scale(1.2);
        }
        100% {
          transform: rotate(-15deg);
        }
      }`)
    );
    document.head.appendChild(stylePing);
  }
};
const setModals = (value) => {
  try {
    styleModals.remove();
  } catch {}

  if (value) {
    styleModals = document.createElement("style");
    styleModals.appendChild(
      document.createTextNode(`.focusLock-Ns3yie, .modal-3c3bKg {
        animation: Modal 1000ms linear both;
      }

      @keyframes Modal {
        0% {
          transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        3.4% {
          transform: matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        4.7% {
          transform: matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        6.81% {
          transform: matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        9.41% {
          transform: matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        10.21% {
          transform: matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        13.61% {
          transform: matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        14.11% {
          transform: matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        17.52% {
          transform: matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        18.72% {
          transform: matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        21.32% {
          transform: matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        24.32% {
          transform: matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        25.23% {
          transform: matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        29.03% {
          transform: matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        29.93% {
          transform: matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        35.54% {
          transform: matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        36.74% {
          transform: matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        41.04% {
          transform: matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        44.44% {
          transform: matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        52.15% {
          transform: matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        59.86% {
          transform: matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        63.26% {
          transform: matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        75.28% {
          transform: matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        85.49% {
          transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        90.69% {
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        100% {
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
      }`)
    );
    document.head.appendChild(styleModals);
  }
};
const setProfile = (value) => {
  try {
    styleProfile.remove();
  } catch {}

  if (value) {
    styleProfile = document.createElement("style");
    styleProfile.appendChild(
      document.createTextNode(`.headerPlaying-j0WQBV,
      .topSectionPlaying-1J5E4n {
        z-index: 1;
        background: url(https://cdn.naila.bot/Discord/playing-background.svg), #7289da;
      }
      .headerSpotify-zpWxgT,
      .topSectionSpotify-1lI0-P {
        z-index: 1;
        background: url(https://cdn.naila.bot/Discord/playing-background.svg), #1db954;
      }
      .headerStreaming-2FjmGz,
      .topSectionStreaming-1Tpf5X {
        z-index: 1;
        background: url(https://cdn.naila.bot/Discord/playing-background.svg), #593695;
      }
      .topSectionPlaying-1J5E4n,
      .topSectionSpotify-1lI0-P,
      .topSectionStreaming-1Tpf5X {
        animation: Profile 15s infinite ease-in-out;
        background-size: 50%;
      }

      @keyframes Profile {
        50% {
          background-position: bottom center;
        }
      }`)
    );
    document.head.appendChild(styleProfile);
  }
};
const setChannelMute = (value) => {
  try {
    styleChannelMute.remove();
  } catch {}

  if (value) {
    styleChannelMute = document.createElement("style");
    styleChannelMute.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[role="switch"]:hover {
        animation: Notif 1.5s infinite ease-in-out;
      }

      @keyframes Notif {
        0% {
          transform: rotate(-10deg);
        }
        50% {
          transform: rotate(10deg) scale(1.01);
        }
        100% {
          transform: rotate(-10deg);
        }
      }`)
    );
    document.head.appendChild(styleChannelMute);
  }
};
const setCall = (value) => {
  try {
    styleCall.remove();
  } catch {}

  if (value) {
    styleCall = document.createElement("style");
    styleCall.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Start Voice Call"]:hover .icon-22AiRD {
        animation: CallButton 1500ms infinite linear both;
      }

      @keyframes CallButton {
        0% {
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        2.87% {
          transform: matrix3d(
            1.05,
            0.24,
            0,
            0,
            -0.24,
            1.05,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        5.74% {
          transform: matrix3d(
            1.05,
            0.423,
            0,
            0,
            -0.423,
            1.05,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        6.57% {
          transform: matrix3d(
            1.046,
            0.458,
            0,
            0,
            -0.458,
            1.046,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        6.67% {
          transform: matrix3d(
            1.046,
            0.462,
            0,
            0,
            -0.462,
            1.046,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        8.61% {
          transform: matrix3d(
            1.145,
            0.17,
            0,
            0,
            -0.17,
            1.145,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        9.54% {
          transform: matrix3d(
            1.161,
            0.024,
            0,
            0,
            -0.024,
            1.161,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        11.48% {
          transform: matrix3d(
            1.139,
            -0.238,
            0,
            0,
            0.238,
            1.139,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        12.41% {
          transform: matrix3d(
            1.115,
            -0.334,
            0,
            0,
            0.334,
            1.115,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        13.23% {
          transform: matrix3d(
            1.091,
            -0.402,
            0,
            0,
            0.402,
            1.091,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        13.33% {
          transform: matrix3d(
            1.088,
            -0.409,
            0,
            0,
            0.409,
            1.088,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        15.28% {
          transform: matrix3d(
            1.147,
            -0.166,
            0,
            0,
            0.166,
            1.147,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        16.2% {
          transform: matrix3d(
            1.157,
            -0.038,
            0,
            0,
            0.038,
            1.157,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        18.14% {
          transform: matrix3d(
            1.136,
            0.204,
            0,
            0,
            -0.204,
            1.136,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        18.89% {
          transform: matrix3d(
            1.119,
            0.279,
            0,
            0,
            -0.279,
            1.119,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        19.07% {
          transform: matrix3d(
            1.114,
            0.296,
            0,
            0,
            -0.296,
            1.114,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        19.9% {
          transform: matrix3d(
            1.093,
            0.364,
            0,
            0,
            -0.364,
            1.093,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        20% {
          transform: matrix3d(
            1.09,
            0.372,
            0,
            0,
            -0.372,
            1.09,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        21.94% {
          transform: matrix3d(
            1.142,
            0.135,
            0,
            0,
            -0.135,
            1.142,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        22.87% {
          transform: matrix3d(
            1.15,
            0.012,
            0,
            0,
            -0.012,
            1.15,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        24.81% {
          transform: matrix3d(
            1.128,
            -0.219,
            0,
            0,
            0.219,
            1.128,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        25.55% {
          transform: matrix3d(
            1.112,
            -0.291,
            0,
            0,
            0.291,
            1.112,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        25.74% {
          transform: matrix3d(
            1.107,
            -0.307,
            0,
            0,
            0.307,
            1.107,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        26.29% {
          transform: matrix3d(
            1.094,
            -0.352,
            0,
            0,
            0.352,
            1.094,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        26.57% {
          transform: matrix3d(
            1.087,
            -0.372,
            0,
            0,
            0.372,
            1.087,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        26.67% {
          transform: matrix3d(
            1.085,
            -0.379,
            0,
            0,
            0.379,
            1.085,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        28.61% {
          transform: matrix3d(
            1.141,
            -0.138,
            0,
            0,
            0.138,
            1.141,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        29.54% {
          transform: matrix3d(
            1.149,
            -0.013,
            0,
            0,
            0.013,
            1.149,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        31.48% {
          transform: matrix3d(
            1.128,
            0.221,
            0,
            0,
            -0.221,
            1.128,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        32.22% {
          transform: matrix3d(
            1.112,
            0.293,
            0,
            0,
            -0.293,
            1.112,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        32.41% {
          transform: matrix3d(
            1.107,
            0.309,
            0,
            0,
            -0.309,
            1.107,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        32.96% {
          transform: matrix3d(
            1.094,
            0.354,
            0,
            0,
            -0.354,
            1.094,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        33.23% {
          transform: matrix3d(
            1.087,
            0.375,
            0,
            0,
            -0.375,
            1.087,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        33.33% {
          transform: matrix3d(
            1.085,
            0.382,
            0,
            0,
            -0.382,
            1.085,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        35.28% {
          transform: matrix3d(
            1.046,
            0.299,
            0,
            0,
            -0.299,
            1.046,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        36.2% {
          transform: matrix3d(
            1.031,
            0.25,
            0,
            0,
            -0.25,
            1.031,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        38.14% {
          transform: matrix3d(
            1.004,
            0.152,
            0,
            0,
            -0.152,
            1.004,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        38.89% {
          transform: matrix3d(
            0.994,
            0.119,
            0,
            0,
            -0.119,
            0.994,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        39.07% {
          transform: matrix3d(
            0.992,
            0.112,
            0,
            0,
            -0.112,
            0.992,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        39.63% {
          transform: matrix3d(
            0.986,
            0.091,
            0,
            0,
            -0.091,
            0.986,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        41.11% {
          transform: matrix3d(
            0.973,
            0.044,
            0,
            0,
            -0.044,
            0.973,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        41.94% {
          transform: matrix3d(
            0.968,
            0.025,
            0,
            0,
            -0.025,
            0.968,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        44.81% {
          transform: matrix3d(
            0.961,
            -0.014,
            0,
            0,
            0.014,
            0.961,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        45.55% {
          transform: matrix3d(
            0.962,
            -0.018,
            0,
            0,
            0.018,
            0.962,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        46.29% {
          transform: matrix3d(
            0.962,
            -0.021,
            0,
            0,
            0.021,
            0.962,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        47.77% {
          transform: matrix3d(
            0.965,
            -0.022,
            0,
            0,
            0.022,
            0.965,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        52.22% {
          transform: matrix3d(
            0.974,
            -0.012,
            0,
            0,
            0.012,
            0.974,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        52.96% {
          transform: matrix3d(
            0.975,
            -0.01,
            0,
            0,
            0.01,
            0.975,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        54.44% {
          transform: matrix3d(
            0.977,
            -0.006,
            0,
            0,
            0.006,
            0.977,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        55.99% {
          transform: matrix3d(
            0.978,
            -0.003,
            0,
            0,
            0.003,
            0.978,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        59.63% {
          transform: matrix3d(
            0.979,
            0.001,
            0,
            0,
            -0.001,
            0.979,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        61.11% {
          transform: matrix3d(
            0.978,
            0.001,
            0,
            0,
            -0.001,
            0.978,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        62.66% {
          transform: matrix3d(
            0.978,
            0.001,
            0,
            0,
            -0.001,
            0.978,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        66.67% {
          transform: matrix3d(
            0.978,
            0.001,
            0,
            0,
            -0.001,
            0.978,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        67.77% {
          transform: matrix3d(
            0.978,
            0.001,
            0,
            0,
            -0.001,
            0.978,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        69.32% {
          transform: matrix3d(0.978, 0, 0, 0, 0, 0.978, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        73.33% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        74.44% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        75.99% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        80% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        82.66% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        86.67% {
          transform: matrix3d(0.978, 0, 0, 0, 0, 0.978, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        89.32% {
          transform: matrix3d(0.978, 0, 0, 0, 0, 0.978, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        93.33% {
          transform: matrix3d(0.978, 0, 0, 0, 0, 0.978, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        100% {
          transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
      }`)
    );
    document.head.appendChild(styleCall);
  }
};
const setPins = (value) => {
  try {
    stylePins.remove();
  } catch {}

  if (value) {
    stylePins = document.createElement("style");
    stylePins.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Pinned Messages"]:hover .icon-22AiRD {
        animation: PinsHover 1500ms linear both;
      }
      .iconWrapper-2OrFZ1[aria-label="Pinned Messages"].selected-1GqIat .icon-22AiRD {
        animation: PinsSelected 2000ms linear both;
      }

      @keyframes PinsHover {
        0% {
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        4.3% {
          transform: matrix3d(
            0.92,
            -0.393,
            0,
            0,
            0.393,
            0.92,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -5.143,
            0,
            1
          );
        }
        8.61% {
          transform: matrix3d(
            0.771,
            -0.637,
            0,
            0,
            0.637,
            0.771,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -8.786,
            0,
            1
          );
        }
        12.91% {
          transform: matrix3d(
            0.677,
            -0.736,
            0,
            0,
            0.736,
            0.677,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10.523,
            0,
            1
          );
        }
        17.22% {
          transform: matrix3d(
            0.653,
            -0.757,
            0,
            0,
            0.757,
            0.653,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10.933,
            0,
            1
          );
        }
        28.33% {
          transform: matrix3d(
            0.696,
            -0.718,
            0,
            0,
            0.718,
            0.696,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10.206,
            0,
            1
          );
        }
        39.44% {
          transform: matrix3d(
            0.711,
            -0.704,
            0,
            0,
            0.704,
            0.711,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -9.938,
            0,
            1
          );
        }
        61.66% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10.004,
            0,
            1
          );
        }
        83.98% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10,
            0,
            1
          );
        }
        100% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10,
            0,
            1
          );
        }
      }

      @keyframes PinsSelected {
        0% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -10,
            0,
            1
          );
        }
        3.23% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            -2.286,
            0,
            1
          );
        }
        6.46% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            3.179,
            0,
            1
          );
        }
        9.68% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            5.784,
            0,
            1
          );
        }
        12.91% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            6.4,
            0,
            1
          );
        }
        21.25% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            5.309,
            0,
            1
          );
        }
        24.9% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            5.005,
            0,
            1
          );
        }
        25% {
          transform: matrix3d(
            0.707,
            -0.707,
            0,
            0,
            0.707,
            0.707,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            5,
            0,
            1
          );
        }
        28.23% {
          transform: matrix3d(
            0.928,
            -0.372,
            0,
            0,
            0.372,
            0.928,
            0,
            0,
            0,
            0,
            1,
            0,
            0.364,
            1.64,
            0,
            1
          );
        }
        29.58% {
          transform: matrix3d(
            0.971,
            -0.24,
            0,
            0,
            0.24,
            0.971,
            0,
            0,
            0,
            0,
            1,
            0,
            0.489,
            0.509,
            0,
            1
          );
        }
        31.46% {
          transform: matrix3d(
            0.995,
            -0.095,
            0,
            0,
            0.095,
            0.995,
            0,
            0,
            0,
            0,
            1,
            0,
            0.621,
            -0.676,
            0,
            1
          );
        }
        34.68% {
          transform: matrix3d(
            0.999,
            0.041,
            0,
            0,
            -0.041,
            0.999,
            0,
            0,
            0,
            0,
            1,
            0,
            0.744,
            -1.749,
            0,
            1
          );
        }
        37.91% {
          transform: matrix3d(
            0.997,
            0.073,
            0,
            0,
            -0.073,
            0.997,
            0,
            0,
            0,
            0,
            1,
            0,
            0.773,
            -1.979,
            0,
            1
          );
        }
        46.25% {
          transform: matrix3d(
            1,
            0.016,
            0,
            0,
            -0.016,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.722,
            -1.489,
            0,
            1
          );
        }
        46.25% {
          transform: matrix3d(
            1,
            0.016,
            0,
            0,
            -0.016,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.722,
            -1.489,
            0,
            1
          );
        }
        54.58% {
          transform: matrix3d(
            1,
            -0.005,
            0,
            0,
            0.005,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.703,
            -1.323,
            0,
            1
          );
        }
        62.99% {
          transform: matrix3d(
            1,
            -0.001,
            0,
            0,
            0.001,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.706,
            -1.356,
            0,
            1
          );
        }
        71.25% {
          transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.707,
            -1.367,
            0,
            1
          );
        }
        75% {
          transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.707,
            -1.366,
            0,
            1
          );
        }
        87.99% {
          transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.707,
            -1.364,
            0,
            1
          );
        }
        100% {
          transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0.707,
            -1.364,
            0,
            1
          );
        }
      }`)
    );
    document.head.appendChild(stylePins);
  }
};
const setUpdate = (value) => {
  try {
    styleUpdate.remove();
  } catch {}

  if (value) {
    styleUpdate = document.createElement("style");
    styleUpdate.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Update Ready!"]:hover .icon-22AiRD {
        animation: Update 1500ms linear both;
      }

      @keyframes Update {
        0% {
          clip-path: inset(0px 0px 0px 0px);
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        4.3% {
          transform: matrix3d(
            0.78,
            -0.816,
            0,
            0,
            0.816,
            0.78,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        8.61% {
          transform: matrix3d(
            0.231,
            -1.198,
            0,
            0,
            1.198,
            0.231,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        12.91% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(
            -0.104,
            -1.259,
            0,
            0,
            1.259,
            -0.104,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        17.22% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(
            -0.186,
            -1.26,
            0,
            0,
            1.26,
            -0.186,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        28.33% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(
            -0.041,
            -1.254,
            0,
            0,
            1.254,
            -0.041,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        39.44% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(
            0.012,
            -1.248,
            0,
            0,
            1.248,
            0.012,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        61.66% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(
            -0.001,
            -1.25,
            0,
            0,
            1.25,
            -0.001,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          );
        }
        83.98% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(0, -1.25, 0, 0, 1.25, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        100% {
          clip-path: inset(0px 0px 8px 0px);
          transform: matrix3d(0, -1.25, 0, 0, 1.25, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
      }`)
    );
    document.head.appendChild(styleUpdate);
  }
};
const setUserButtons = (value) => {
  try {
    styleUserButtons.remove();
  } catch {}

  if (value) {
    styleUserButtons = document.createElement("style");
    styleUserButtons.appendChild(
      document.createTextNode(`.button-14-BFJ:hover .contents-18-Yxp {
        animation: UserModalButtons 0.5s normal ease;
      }
      .container-3baos1 .noWrap-3jynv6 {
        width: 100px;
        opacity: 1;
      }
      .button-14-BFJ {
        transition: 0.2s;
      }
      .button-14-BFJ:hover {
        padding-bottom: 0px;
        transition: 0.2;
      }

      @keyframes UserModalButtons {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateY(0px);
        }
      }`)
    );
    document.head.appendChild(styleUserButtons);
  }
};

export default {
gooseModHandlers: {
  onImport: async () => {
    setPing(settings.pings);
    setModals(settings.modals);
    setProfile(settings.profile);
    setChannelMute(settings.channelMute);
    setCall(settings.call);
    setPins(settings.pins);
    setUpdate(settings.update);
    setUserButtons(settings.userButtons);
  },

  onLoadingFinished: async () =>
    goosemodScope.settings.createItem("Better Animations", [
      `(v${version})`,
      {
        type: "header",
        text: "What to Animate",
      },
      {
        type: "toggle",
        text: "Pings Count",
        onToggle: (value) => {
          settings.pings = value;
          setPing(value);
        },
        isToggled: () => settings.pings,
      },
      {
        type: "toggle",
        text: "Modals",
        onToggle: (value) => {
          settings.modals = value;
          setModals(value);
        },
        isToggled: () => settings.modals,
      },
      {
        type: "toggle",
        text: "Profile Modal",
        onToggle: (value) => {
          settings.profile = value;
          setProfile(value);
        },
        isToggled: () => settings.profile,
      },
      {
        type: "toggle",
        text: "Channel Mute Button",
        onToggle: (value) => {
          settings.channelMute = value;
          setChannelMute(value);
        },
        isToggled: () => settings.channelMute,
      },
      {
        type: "toggle",
        text: "Call Button",
        onToggle: (value) => {
          settings.call = value;
          setCall(value);
        },
        isToggled: () => settings.call,
      },
      {
        type: "toggle",
        text: "Pins Button",
        onToggle: (value) => {
          settings.pins = value;
          setPins(value);
        },
        isToggled: () => settings.pins,
      },
      {
        type: "toggle",
        text: "Update Button",
        onToggle: (value) => {
          settings.update = value;
          setUpdate(value);
        },
        isToggled: () => settings.update,
      },
      {
        type: "toggle",
        text: "User Buttons",
        onToggle: (value) => {
          settings.userButtons = value;
          setUserButtons(value);
        },
        isToggled: () => settings.userButtons,
      },
    ]),

  onRemove: async () => {
    goosemodScope.settings.removeItem("Better Animations");

    setPing(false);
    setModals(false);
    setProfile(false);
    setChannelMute(false);
    setCall(false);
    setPins(false);
    setUpdate(false);
    setUserButtons(false);
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    setPing(settings.pings);
    setModals(settings.modals);
    setProfile(settings.profile);
    setChannelMute(settings.channelMute);
    setCall(settings.call);
    setPins(settings.pins);
    setUpdate(settings.update);
    setUserButtons(settings.userButtons);
  },





}
};
