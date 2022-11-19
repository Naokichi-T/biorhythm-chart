import dayjs from "dayjs";
import { Chart } from "react-google-charts";
import "./BiorhythmChart.css";

type ChartProps = {
  birthDate: string;
  targetDate: string;
};

const formatDate = (dateString: string) => {
  return dayjs(dateString).format("YYYY/MM/DD");
};

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 100, 40],
  ["2005", 117, 46],
  ["2006", 66, 112],
  ["2007", 103, 54],
];

export const BiorhythmChart = (props: ChartProps) => {
  const { birthDate, targetDate } = props;
  const options = {
    curveType: "function",
    chartArea: { top: 16, width: "100%", height: "80%" },
    legend: { position: "none" },
    vAxis: { ticks: [], title: "" },
  };
  return (
    <div class="container">
      <div>{formatDate(targetDate)}</div>
      <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />
      <div>
        <p className="physical">Physical: 0.5</p>
        <p className="emotional">Emotional: 0.1</p>
        <p className="intellectual">Intellectual: -0.2</p>
      </div>
    </div>
  );
};
