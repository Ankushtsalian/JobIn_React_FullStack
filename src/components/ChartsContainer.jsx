import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";
import { FaUnderline } from "react-icons/fa";

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((state) => state.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        disabled={barChart}
        style={
          barChart
            ? {
                color: "#2cb1bc",
                textDecorationLine: "underline",
                fontSize: "25px",
                padding: "15px",
              }
            : { color: "grey", fontSize: "15px" }
        }
      >
        Bar Chart
      </button>

      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        disabled={!barChart}
        style={
          !barChart
            ? {
                color: "#2cb1bc",
                textDecorationLine: "underline",
                fontSize: "25px",
                padding: "15px",
              }
            : { color: "grey", fontSize: "15px" }
        }
      >
        Area Chart
      </button>

      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
}
