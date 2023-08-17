// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
  constructor(canvasContext, titles, values) {
    const chart = c3.generate({
      bindto: "#js-chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
      },
    });
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
