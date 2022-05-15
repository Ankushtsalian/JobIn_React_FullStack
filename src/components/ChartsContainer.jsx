import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";

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
        className={barChart ? "chartActive" : "chart"}
      >
        BAR CHART
      </button>

      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        disabled={!barChart}
        className={!barChart ? "chartActive" : "chart"}
      >
        AREA CHART
      </button>

      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
}
