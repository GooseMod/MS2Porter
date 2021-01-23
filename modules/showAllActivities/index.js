let version = "1.0.0";

let style;

const { inject, uninject } = goosemodScope.patcher;

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`.allactivities-left {
        margin-right: 8px;
    }
    .allactivities-right {
        margin-left: 8px;
    }
    .allactivities-margin {
        margin-top: 12px;
    }
    .allactivities-margin2 {
        margin-top: 22px;
    }`)
    );
    document.head.appendChild(style);

    let temp;
    const filterActivities = (a, i) => {
      if (i == 0) temp = [];
      if (temp.includes(a.application_id || a.name)) return false;
      temp.push(a.application_id || a.name);
      return a.type != 4;
    };

    const {
      find,
      findByProps,
      findByDisplayName,
    } = goosemodScope.webpackModules;
    const { getActivities } = await findByProps("getActivities");
    const { getGame } = await findByProps("getGame", "getGameByName");
    const UserActivity = await findByDisplayName("UserActivity");

    inject(
      "gm-show-all-activities-pre",
      UserActivity.prototype,
      "render",
      function (args) {
        if (this.props.__saa) return args;

        const activities = getActivities(this.props.user.id).filter(
          filterActivities
        );
        if (!activities || !activities.length) return args;

        if (!this.state)
          this.state = { activity: activities.indexOf(this.props.activity) };
        else {
          const activity = activities[this.state.activity];
          if (!activity) return args;

          this.props.activity = activity;
          this.props.game = getGame(activity.application_id);

          if (this.state.activity > 0 && this.props.streamingGuild) {
            this.props._streamingGuild = this.props.streamingGuild;
            delete this.props.streamingGuild;
          } else if (this.state.activity === 0 && this.props._streamingGuild)
            this.props.streamingGuild = this.props._streamingGuild;
        }
        return args;
      },
      true
    );

    const { React } = goosemodScope.webpackModules.common;
    const { Messages } = await findByProps("Messages");
    const classes = await findByProps("iconButtonSize");
    const Tooltip = await findByProps("TooltipContainer").TooltipContainer;
    const Button = await find((m) => m.DropdownSizes);

    inject(
      "gm-show-all-activities",
      UserActivity.prototype,
      "render",
      function (_, res) {
        if (this.props.__saa || (this.state && this.state.activity > 0)) {
          const actions = goosemodScope.reactUtils.findInReactTree(
            res,
            (c) => c && c.onOpenConnections
          );
          if (actions) {
            actions.activity = this.props.activity;
            delete actions.applicationStream;
          }
        }

        if (this.props.__saa) {
          res = res.props.children;
          return res;
        }

        const activities = getActivities(this.props.user.id).filter(
          filterActivities
        );
        if (
          (res && res.props && !res.props.children) ||
          !activities ||
          !activities.length
        )
          return res;

        const { children } = res.props.children[1].props;
        const marginClass =
          this.props.activity.details || this.props.activity.state
            ? ` allactivities-margin${
                this.props.activity.type == 1 &&
                this.props.source == "Profile Modal"
                  ? "2"
                  : ""
              }`
            : "";

        if (this.state.activity != 0)
          children.unshift(
            React.createElement(
              Tooltip,
              {
                className: `allactivities-left${marginClass}`,
                text: Messages.PAGINATION_PREVIOUS,
              },
              React.createElement(
                Button,
                {
                  className: classes.iconButtonSize,
                  size: Button.Sizes.MIN,
                  color: Button.Colors.WHITE,
                  look: Button.Looks.OUTLINED,
                  onClick: () =>
                    this.setState({ activity: this.state.activity - 1 }),
                },
                React.createElement(
                  "div",
                  {
                    className: "contents-18-Yxp",
                  },
                  React.createElement(
                    "div",
                    {
                      className:
                        "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6",
                      style: { flex: "1 1 auto" },
                    },
                    React.createElement(
                      "svg",
                      {
                        "aria-hidden": "false",
                        width: "24",
                        height: "24",
                        className: "flexChild-faoVW3 left-3d-3Co",
                        viewBox: "0 0 24 24",
                        style: { flex: "1 1 auto" },
                      },
                      React.createElement("polygon", {
                        fill: "currentColor",
                        "fill-rule": "nonzero",
                        points:
                          "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
                      })
                    )
                  )
                )
              )
            )
          );
        if (this.state.activity < activities.length - 1)
          children.push(
            React.createElement(
              Tooltip,
              {
                className: `allactivities-right${marginClass}`,
                text: Messages.NEXT,
              },
              React.createElement(
                Button,
                {
                  className: classes.iconButtonSize,
                  size: Button.Sizes.MIN,
                  color: Button.Colors.WHITE,
                  look: Button.Looks.OUTLINED,
                  onClick: () =>
                    this.setState({ activity: this.state.activity + 1 }),
                },
                React.createElement(
                  "div",
                  {
                    className: "contents-18-Yxp",
                  },
                  React.createElement(
                    "div",
                    {
                      className:
                        "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6",
                      style: { flex: "1 1 auto" },
                    },
                    React.createElement(
                      "svg",
                      {
                        "aria-hidden": "false",
                        width: "24",
                        height: "24",
                        className: "flexChild-faoVW3 right-1C2enk",
                        viewBox: "0 0 24 24",
                        style: { flex: "1 1 auto" },
                      },
                      React.createElement("polygon", {
                        fill: "currentColor",
                        "fill-rule": "nonzero",
                        points:
                          "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
                      })
                    )
                  )
                )
              )
            )
          );
        return res;
      }
    );
  },

  onRemove: async () => {
    uninject("gm-show-all-activities-pre");
    uninject("gm-show-all-activities");
    style.remove();
  },





}
};
