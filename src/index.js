import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const props = {
  startTime: "2019-4-1",
  endTime: "2020-4-1",
  currentTime: "2020-2-1",
  data: [
    {
      color: "#6A9BFF",
      time: "2019-5-1",
      tooltip: (
        <div>
          <div>逾期完成：逾期15天</div>
          <div>计划时间：2019.04.22</div>
        </div>
      ),
      subContent: (
        <div>
          <div>蚂蚁接入</div>
          <div>2019.05.06</div>
        </div>
      )
    },
    {
      color: "#35B34A",
      time: "2019-7-1",
      tooltip: (
        <div>
          <div>逾期完成：逾期15天</div>
          <div>计划时间：2019.04.22</div>
        </div>
      ),
      subContent: (
        <div>
          <div>蚂蚁接入</div>
          <div>2019.05.06</div>
        </div>
      )
    },
    {
      color: "#F5A623",
      time: "2020-1-1",
      tooltip: (
        <div>
          <div>逾期完成：逾期15天</div>
          <div>计划时间：2019.04.22</div>
        </div>
      ),
      subContent: (
        <div>
          <div>蚂蚁接入</div>
          <div>2019.05.06</div>
        </div>
      )
    },
    {
      color: "#FF5029",
      time: "2019-11-1",
      tooltip: (
        <div>
          <div>逾期完成：逾期15天</div>
          <div>计划时间：2019.04.22</div>
        </div>
      ),
      subContent: (
        <div>
          <div>蚂蚁接入</div>
          <div>2019.05.06</div>
        </div>
      )
    },
    {
      color: "#D7D8D9",
      time: "2020-3-1",
      tooltip: (
        <div>
          <div>逾期完成：逾期15天</div>
          <div>计划时间：2019.04.22</div>
        </div>
      ),
      subContent: (
        <div>
          <div>蚂蚁接入</div>
          <div>2019.05.06</div>
        </div>
      )
    }
  ],
  legendData: [
    { color: "#6A9BFF", text: "按计划完成" },
    { color: "#F5A623", text: "逾期完成" },
    { color: "#FF5029", text: "逾期未完成" },
    { color: "#D7D8D9", text: "未来计划" }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
