import React from "react";
import Bg from "./components/bg";
import Point from "./components/point";
import Legend from "./components/legend";
import "./App.less";

export default class App extends React.Component {
  static defaultProps = {
    startTime: "",
    endTime: "",
    currentTime: "",
    data: [],
    legendData: []
  };

  render() {
    const _startTimestamp = Date.parse(new Date(this.props.startTime));
    const _endTimestamp = Date.parse(new Date(this.props.endTime));
    const _currentTimestamp = Date.parse(new Date(this.props.currentTime));
    const timeRange = _endTimestamp - _startTimestamp;
    const currentPos =
      ((_currentTimestamp - _startTimestamp) / timeRange) * 100;
    const renderData =
      (Array.isArray(this.props.data) &&
        this.props.data.map(item => ({
          ...item,
          left:
            ((Date.parse(new Date(item.time)) - _startTimestamp) / timeRange) *
              100 +
            "%"
        }))) ||
      [];

    return (
      <div className="lp-tl">
        <div className="lp-tl-line">
          <Bg />
          <Bg
            showStroke
            showArrow={false}
            bgColor={"#6A9BFF"}
            width={currentPos + "%"}
            className="lp-tl-line-current"
          />

          {renderData.map((item, key) => (
            <Point
              key={key}
              className="lp-tl-line-point"
              content={item.tooltip}
              style={{
                left: item.left
              }}
              color={item.color}
            />
          ))}
        </div>
        <div className="lp-tl-text">
          {renderData.map((item, key) => (
            <div
              key={key}
              className="lp-tl-text-node"
              style={{
                left: item.left
              }}
            >
              {item.subContent}
            </div>
          ))}
        </div>
        <Legend className="lp-tl-le" data={this.props.legendData} />
      </div>
    );
  }
}
