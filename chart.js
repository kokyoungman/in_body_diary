// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (chart.js)

const canvasContext = document
  .querySelector("#js-chart-canvas")
  .getContext("2d");

const chartType = "bar";

const labels = ["1", "2", "3", "4", "5"];

const datasets = [
  {
    label: "체중",
    data: [70, 75, 80, 72, 90],
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    barThickness: 10,
  },
];

const options = {
  indexAxis: "y",
  scales: {
    x: {
      min: 45,
      max: 84,
    },
  },
  plugins: {
    datalabels: {
      color: "blue",
      anchor: "end",
      align: "start",
    },
  },
};

const data = {
  labels: labels,
  datasets: datasets,
};

const gradeDraw = {
  id: "gradeDraw",

  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
      scales: { x, y },
    } = chart;

    const gradePosXs = [];
    gradePosXs.push(x.getPixelForValue(55));
    gradePosXs.push(x.getPixelForValue(58));
    gradePosXs.push(x.getPixelForValue(60));

    ctx.save();

    ctx.fillStyle = "red";
    ctx.fillRect(
      gradePosXs[2],
      top,
      gradePosXs[2] - gradePosXs[1],
      bottom - top
    );

    canvasContext.restore();
  },
};

const config = {
  type: chartType,
  data: data,
  options: options,
  plugins: [ChartDataLabels, gradeDraw],
};

const weightChart = new Chart(canvasContext, config);
