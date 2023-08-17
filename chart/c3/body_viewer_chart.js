// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
  constructor(
    canvasContext,
    weightValues,
    chestValues,
    waistValues,
    hipsValues,
    upperArmValues,
    thighValues
  ) {
    const chart = c3.generate({
      bindto: "#js-chart",
      data: {
        columns: [
          weightValues.unshift("몸무게"),
          ["가슴 둘레", 50, 20, 10, 40, 15, 25],
          ["허리 둘레", 50, 20, 10, 40, 15, 25],
          ["엉덩이 둘레", 50, 20, 10, 40, 15, 25],
          ["위 팔 둘레", 50, 20, 10, 40, 15, 25],
          ["허벅지 둘레", 50, 20, 10, 40, 15, 25],
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
