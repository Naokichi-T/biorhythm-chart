import dayjs from "dayjs";
import { Chart } from "react-google-charts";
import { getCalculateBiorhythmData } from "../calculations";
import classes from "./BiorhythmChart.module.css";

type ChartProps = {
  birthDate: string;
  targetDate: string;
};

const formatDate = (dateString: string) => {
  return dayjs(dateString).format("YYYY/MM/DD");
};

const options = {
  chartArea: { top: 16, width: "100%", height: "80%" },
  curveType: "function",
  hAxis: { ticks: [], title: "", slantedText: false },
  vAxis: { ticks: [1, 0.5, 0, -0.5, -1], title: "", minValue: -1, maxValue: 1 },
  intervals: { style: "line" },
  annotations: { style: "line" },
  lineWidth: 1.5,
  legend: { position: "none" },
  series: {
    0: { color: "seagreen" },
    1: { color: "tomato" },
    2: { color: "royalblue" },
  },
};

export const BiorhythmChart = (props: ChartProps) => {
  const { birthDate, targetDate } = props;
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = getCalculateBiorhythmData(birthDate, startDate, 31);

  return (
    <div class={classes.container}>
      <div>{formatDate(targetDate)}</div>
      <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />
      <table>
        <tr style={{ color: "seagreen" }}>
          <th>身体:</th>
          <td>0.50</td>
        </tr>
        <tr style={{ color: "tomato" }}>
          <th>感情:</th>
          <td>0.10</td>
        </tr>
        <tr style={{ color: "royalblue" }}>
          <th>知性:</th>
          <td>-0.20</td>
        </tr>
      </table>
    </div>
  );
};
