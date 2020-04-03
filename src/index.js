import React from "react";
import ReactDOM from "react-dom";
import { TimeLine, TimeRangeLine } from "./App";
import "./index.css";

const renderSubContent = item => (
  <div
    style={{
      color: item._isAfterCurrentTime
        ? "rgb(215, 216, 217)"
        : "rgba(0, 0, 0, 0.65)"
    }}
  >
    <div>{item.name}</div>
    <div>{item.time}</div>
  </div>
);

const renderTooltip = item => {
  if (item.time > "2020-0-0") {
    return;
  }
  return (
    <div>
      <div>逾期完成：逾期15天</div>
      <div>计划时间：2019.04.22</div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <h1>DEMO</h1>
    <h3>里程碑式</h3>
    <TimeLine
      startTime="2019-4-1"
      endTime="2020-4-1"
      currentTime="2020-2-1"
      data={[
        {
          name: "战役一",
          color: "#6A9BFF",
          time: "2019-5-1",
          renderTooltip,
          renderSubContent
        },
        {
          name: "战役二",
          color: "#35B34A",
          time: "2019-7-1",
          renderTooltip,
          renderSubContent
        },
        {
          name: "战役三",
          color: "#F5A623",
          time: "2020-1-1",
          renderTooltip,
          renderSubContent
        },
        {
          name: "战役四",
          color: "#FF5029",
          time: "2019-11-1",
          renderTooltip,
          renderSubContent
        },
        {
          name: "战役五",
          color: "#D7D8D9",
          time: "2020-3-1",
          renderTooltip,
          renderSubContent
        }
      ]}
      legendData={[
        { color: "#6A9BFF", text: "按计划完成" },
        { color: "#F5A623", text: "逾期完成" },
        { color: "#FF5029", text: "逾期未完成" },
        { color: "#D7D8D9", text: "未来计划" }
      ]}
    />
    <h3>时间范围式</h3>
    <TimeRangeLine
      startTime="2019-4-1"
      endTime="2020-4-1"
      startRangeTime="2019-6-1"
      endRangeTime="2020-1-1"
      showRangeText
    />
  </React.StrictMode>,
  document.getElementById("root")
);
