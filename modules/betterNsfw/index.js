const version = "1.0.2";

let style;
let timeout;

let unpatch;

export default {
goosemodHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`.chat-3bRxxu.nsfw .imageWrapper-2p5ogY {
        position: relative;
      }
      .chat-3bRxxu.nsfw .imageWrapper-2p5ogY.embedWrapper-lXpS3L:hover::after, .chat-3bRxxu.nsfw .imageWrapper-2p5ogY .wrapper-2TxpI8:hover::after, .chat-3bRxxu.nsfw .imageWrapper-2p5ogY.embedThumbnail-2Y84-K:hover::after {
        display: none;
      }
      .chat-3bRxxu.nsfw .imageWrapper-2p5ogY.embedWrapper-lXpS3L::after, .chat-3bRxxu.nsfw .imageWrapper-2p5ogY .wrapper-2TxpI8.wrapperPaused-19pWuK::after, .chat-3bRxxu.nsfw .imageWrapper-2p5ogY.embedThumbnail-2Y84-K::after {
        content: "NSFW";
        position: absolute;
        display: block;
        left: 50%;
        top: 50%;
        background-color: rgb(240, 71, 71);
        color: #dcddde;
        font-size: 15px;
        font-weight: 600;
        padding: 8px 12px;
        border-radius: 20px;
        letter-spacing: 0.5px;
        transform: translate(-50%, -50%);
      }
      .chat-3bRxxu.nsfw .wrapper-2TxpI8.wrapperPaused-19pWuK:hover::after {
        display: none;
      }
      .chat-3bRxxu.nsfw .imageWrapper-2p5ogY img, .chat-3bRxxu.nsfw .embedVideo-3nf0O9 video, .chat-3bRxxu.nsfw .video-8eMOth {
        filter: blur(20px);
        position: relative;
      }
      .chat-3bRxxu.nsfw .imageWrapper-2p5ogY img:hover, .chat-3bRxxu.nsfw .embedVideo-3nf0O9 video:hover, .chat-3bRxxu.nsfw .video-8eMOth:hover {
        filter: none;
      }
      .chat-3bRxxu.nsfw .wrapperControlsHidden-35Gtol video {
        filter: none;
      }
      `)
    );
    document.head.appendChild(style);

    const runInjection = () => {
      try {
        const { findByProps } = goosemodScope.webpackModules;

        unpatch = goosemodScope.patcher.patch(
          goosemodScope.reactUtils.getOwnerInstance(
            document.querySelector(`.${findByProps("chat").chat}`)
          ).constructor.prototype,
          "render",
          (_, res) => {
            if (
              findByProps("getChannel").getChannel(
                res.props.children[1].props.children[0]?.props.channelId
              ).nsfw
            ) {
              res.props.children[1].props.className += " nsfw";
            }

            return res;
          }
        );
      } catch {
        timeout = setTimeout(runInjection, 500);
      }
    };

    runInjection();
  },

  onRemove: async () => {
    style.remove();
    clearTimeout(timeout);

    try {
      unpatch();
    } catch {}
  },





}
};
