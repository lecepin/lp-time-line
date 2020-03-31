import React from "react";
import "./bg.less";

export default class Bg extends React.Component {
  static defaultProps = {
    showArrow: true,
    showStroke: false,
    bgColor: "#D7D8D9",
    width: "",
    className: ""
  };

  render() {
    return (
      <div className={`lp-tl-bg ${this.props.className}`}>
        <div
          className="lp-tl-bg-line"
          style={{
            backgroundColor: this.props.bgColor,
            width: this.props.width,
            flexGrow: this.props.width ? "unset" : 1
          }}
        ></div>
        {this.props.showArrow && (
          <div
            className="lp-tl-bg-arrow"
            style={{
              borderColor: `transparent ${this.props.bgColor} transparent transparent`
            }}
          ></div>
        )}
        {this.props.showStroke && (
          <div
            className="lp-tl-bg-stroke"
            style={{
              backgroundColor: this.props.bgColor
            }}
          ></div>
        )}
      </div>
    );
  }
}
