import React from "react";
import Point from "./point";
import "./legend.less";

export default class Legend extends React.Component {
  static defaultProps = {
    className: "",
    data: []
  };

  render() {
    return (
      <div className={`lp-tl-legend ${this.props.className}`}>
        {Array.isArray(this.props.data) &&
          this.props.data.map((item, key) => (
            <div className="lp-tl-legend-node" key={key}>
              <Point color={item.color} hoverable={false} />
              {item.text}
            </div>
          ))}
      </div>
    );
  }
}
