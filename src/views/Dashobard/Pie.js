import React, { Component } from "react";
import { Chart, Geom, Axis, Coord, Label } from "bizcharts";
import { DataView } from "@antv/data-set";

const data = [
  { item: "Estudiantes", count: 40 },
  { item: "Graduados", count: 10 },
  { item: "Doctores", count: 20 },
  { item: "Licenciados", count: 10 }
];
const dv = new DataView();
dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};

export default class PieC extends Component {
  render() {
    return (
      <Chart height={300} data={dv} scale={cols} renderer="svg" forceFit>
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Geom type="intervalStack" position="percent" color="item">
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.item + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    );
  }
}
