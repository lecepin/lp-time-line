import React from "react";
import Popover from "antd/es/popover";
import "antd/es/popover/style/css";
import "./point.less";

export default class Point extends React.Component {
  static defaultProps = {
    className: "",
    trigger: "hover",
    color: "#35B34A",
    content: "",
    style: {},
    hoverable: true
  };

  render() {
    return (
      <div
        className={`lp-tl-point ${this.props.className}`}
        style={this.props.style}
      >
        <Popover
          placement="topLeft"
          title={""}
          trigger={(this.props.content && this.props.trigger) || "no"}
          content={this.props.content}
          getPopupContainer={triggerNode => triggerNode.parentNode}
        >
          <div
            className={`lp-tl-point-circle ${(this.props.hoverable &&
              "lp-tl-point-circle-hover") ||
              ""}`}
            style={{
              backgroundColor: this.props.color
            }}
          ></div>
        </Popover>
      </div>
    );
  }
}
