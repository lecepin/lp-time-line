## lp-time-line 时间里程碑

[![npm (scoped with tag)](https://img.shields.io/npm/v/lp-time-line.svg)](https://npmjs.com/package/lp-time-line)
[![NPM downloads](https://img.shields.io/npm/dm/lp-time-line.svg)](https://npmjs.com/package/lp-time-line)

以时间维度，定位的时间线组件。包含

- 里程碑时间线 TimeLine
- 时间范围线 TimeRangeLine

![](https://img.alicdn.com/tfs/TB11KzBcsKfxu4jSZPfXXb3dXXa-1430-834.jpg)

## Install

[![](https://nodei.co/npm/lp-time-line.png)](https://npmjs.com/package/lp-time-line)

```
npm install lp-time-line
```

## Usage

```js
import { TimeLine, TimeRangeLine } from "lp-time-line"
```

> 只能在React环境使用。

## API

### TimeLine 组件

| 属性名      | 类型                | 必填  | 默认值 | 备注                                                    |
| ----------- | ------------------- | ----- | ------ | ------------------------------------------------------- |
| startTime   | DateTime String     | true  |        | 时间轴的开始时间。以“-”分隔的时间字符串，如“2020-1-1”。 |
| endTime     | DateTime String     | true  |        | 时间轴的结束时间。同上。                                |
| currentTime | DateTime String     | false |        | 当前时间。同上。                                        |
| data        | Array<TimeLineData> | false | []     | 时间轴上的节点数据。                                    |
| legendData  | Array<LegendData>   | false | []     | 时间轴下方的图例信息。                                  |

#### TimeLineData 类型

| 属性名           | 类型            | 必填 | 默认值 | 备注                                                         |
| ---------------- | --------------- | ---- | ------ | ------------------------------------------------------------ |
| color            | Color String    |      |        | 时间轴上点的颜色值。如“#abcdef”。                            |
| time             | DateTime String |      |        | 点对应的时间。                                               |
| renderTooltip    | Function(item)  |      |        | Tootip的渲染函数，item包含了原始信息，`item._isAfterCurrentTime`为当前点是否在当前时间后。 |
| renderSubContent | Function(item)  |      |        | 点下方文本的渲染函数，item包含了原始信息，`item._isAfterCurrentTime`为当前点是否在当前时间后。 |

#### LegendData 类型

| 属性名 | 类型         | 必填 | 默认值 | 备注                           |
| ------ | ------------ | ---- | ------ | ------------------------------ |
| color  | Color String |      |        | 时间轴下方的图例信息点的颜色。 |
| text   | String       |      |        | 时间轴下方的图例信息点的文本。 |

### TimeRangeLine 组件


| 属性名    | 类型            | 必填 | 默认值 | 备注                                                    |
| --------- | --------------- | ---- | ------ | ------------------------------------------------------- |
| startTime   | DateTime String     | true  |        | 时间轴的开始时间。以“-”分隔的时间字符串，如“2020-1-1”。 |
| endTime     | DateTime String     | true  |        | 时间轴的结束时间。同上。                                |
| startRangeTime | DateTime String |  | | 范围区域的开始时间点。同上。 |
| endRangeTime | DateTime String |  | | 范围区域的结束时间点。同上。 |
| showRangeText | Boolean |  | true | 是否显示范围两个点的时间文本。 |

## Demo

```js
import React from "react";
import ReactDOM from "react-dom";
import { TimeLine, TimeRangeLine } from "lp-time-line";

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

```

