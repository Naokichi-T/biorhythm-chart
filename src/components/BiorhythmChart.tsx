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

// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2004", 100, 40],
//   ["2005", 117, 46],
//   ["2006", 66, 112],
//   ["2007", 103, 54],
// ];

// export const data = [
//   ["Day", "Guardians of the Galaxy", "The Avengers", "Transformers: Age of Extinction"],
//   [1, 37.8, 80.8, 41.8],
//   [2, 30.9, 69.5, 32.4],
//   [3, 25.4, 57, 25.7],
//   [4, 11.7, 18.8, 10.5],
//   [5, 11.9, 17.6, 10.4],
//   [6, 8.8, 13.6, 7.7],
//   [7, 7.6, 12.3, 9.6],
//   [8, 12.3, 29.2, 10.6],
//   [9, 16.9, 42.9, 14.8],
//   [10, 12.8, 30.9, 11.6],
//   [11, 5.3, 7.9, 4.7],
//   [12, 6.6, 8.4, 5.2],
//   [13, 4.8, 6.3, 3.6],
//   [14, 4.2, 6.2, 3.4],
// ];

export const BiorhythmChart = (props: ChartProps) => {
  const { birthDate, targetDate } = props;
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = getCalculateBiorhythmData(birthDate, startDate, 31);

  const options = {
    chartArea: { top: 16, width: "100%", height: "80%" },
    curveType: "function",
    hAxis: { ticks: [], title: "", minValue: 0, maxValue: 30, slantedText: false },
    vAxis: { ticks: [1, 0.5, 0, -0.5, -1], title: "", minValue: -1, maxValue: 1 },
    // tooltip: {
    //   isHtml: true,
    //   trigger: "visible",
    // },
    // intervals: { style: "line" },
    // annotations: { style: "line" },
    // lineWidth: 2,
    legend: { position: "none" },
  };
  return (
    <div class={classes.container}>
      <div>{formatDate(targetDate)}</div>
      <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />
      <table>
        <tr class="physical">
          <th>身体:</th>
          <td>0.50</td>
        </tr>
        <tr class="emotional">
          <th>感情:</th>
          <td>0.10</td>
        </tr>
        <tr class="intellectual">
          <th>知性:</th>
          <td>-0.20</td>
        </tr>
      </table>
    </div>
  );
};
