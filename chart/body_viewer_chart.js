// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
  constructor(canvasContext, title, labels, values) {
    const type = "bar";
    const datasets = [];
    const plugins = [ChartDataLabels];

    const dataset = {
      label: title,
      data: values,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      barThickness: 20,
    };
    datasets.push(dataset);

    const options = {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          max: 45,
        },
      },
      layout: {
        padding: {
          top: 55,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: "#020202",
          anchor: "end",
          align: "start",
          formatter: (value, context) => {
            return `${value}`;
          },
        },
      },
    };

    this.baseChart = new BaseChart(
      canvasContext,
      type,
      labels,
      datasets,
      options,
      plugins
    );
  }

  // 재설정함
  change = (labels, values) => {
    this.baseChart.changeLabels(labels);
    this.baseChart.changeValues(0, values);

    this.baseChart.chart.config.options.plugins.datalabels.formatter = (
      value,
      context
    ) => {
      return `${value}`;
    };

    this.baseChart.update();
  };
}
