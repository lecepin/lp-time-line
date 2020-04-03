import React from "react";
import Bg from "./components/bg";
import Point from "./components/point";
import Legend from "./components/legend";
import "./App.less";

export default class TimeLine extends React.Component {
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
          _left:
            ((Date.parse(new Date(item.time)) - _startTimestamp) / timeRange) *
              100 +
            "%",
          _isAfterCurrentTime:
            Date.parse(new Date(item.time)) - _currentTimestamp > 0
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
            width={currentPos}
            className="lp-tl-line-current"
          />

          {renderData.map((item, key) => (
            <Point
              key={key}
              className="lp-tl-line-point"
              content={item.renderTooltip && item.renderTooltip(item)}
              style={{
                left: item._left
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
                left: item._left
              }}
            >
              {item.renderSubContent && item.renderSubContent(item)}
            </div>
          ))}
        </div>
        <Legend className="lp-tl-le" data={this.props.legendData} />
      </div>
    );
  }
}

class TimeRangeLine extends React.Component {
  static defaultProps = {
    startTime: "",
    endTime: "",
    startRangeTime: "",
    endRangeTime: "",
    showRangeText: true
  };

  render() {
    const _startTimestamp = Date.parse(new Date(this.props.startTime));
    const _endTimestamp = Date.parse(new Date(this.props.endTime));
    const _startRangeTimestamp = Date.parse(
      new Date(this.props.startRangeTime)
    );
    const _endRangeTimestamp = Date.parse(new Date(this.props.endRangeTime));
    const timeRange = _endTimestamp - _startTimestamp;
    const startRangePos =
      ((_startRangeTimestamp - _startTimestamp) / timeRange) * 100;
    const endRangePos =
      ((_endRangeTimestamp - _startTimestamp) / timeRange) * 100;
    return (
      <div className="lp-tl">
        <div className="lp-tl-line">
          <Bg showArrow={false} />
          <Bg
            showStroke
            showLeftStroke
            showArrow={false}
            bgColor={"#6A9BFF"}
            width={endRangePos}
            className="lp-tl-line-current"
            startPos={startRangePos}
          />
        </div>
        {this.props.showRangeText && (
          <div className="lp-tl-text">
            <div
              className="lp-tl-text-node"
              style={{
                left: startRangePos + "%"
              }}
            >
              {this.props.startRangeTime}
            </div>
            <div
              className="lp-tl-text-node"
              style={{
                right: 100 - endRangePos + "%"
              }}
            >
              {this.props.endRangeTime}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export { TimeLine, TimeRangeLine };
