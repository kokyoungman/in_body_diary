// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (baseChart.js)

class BaseChart {
  constructor(canvasContext, type, labels, datasets, options, plugins) {
    const data = {
      labels,
      datasets,
    };

    const config = {
      type,
      data,
      options,
      plugins,
    };

    this.chart = new Chart(canvasContext, config);
  }

  // 라벨들을 변경함
  changeLabels = (labels) => {
    this.chart.config.data.labels = labels;
  };

  // 값들을 변경함
  changeValues = (index, values) => {
    this.chart.config.data.datasets[index].data = values;
  };

  // 단계값들을 변경함
  changeGradeDrawValues = (gradeDrawValues) => {
    this.chart.config.options.plugins.gradeDraw.value0 = gradeDrawValues[0];
    this.chart.config.options.plugins.gradeDraw.value1 = gradeDrawValues[1];
    this.chart.config.options.plugins.gradeDraw.value2 = gradeDrawValues[2];
    this.chart.config.options.plugins.gradeDraw.value3 = gradeDrawValues[3];
    this.chart.config.options.plugins.gradeDraw.value4 = gradeDrawValues[4];
    this.chart.config.options.plugins.gradeDraw.value5 = gradeDrawValues[5];
    this.chart.config.options.plugins.gradeDraw.value6 = gradeDrawValues[6];
  };

  // 업데이트함
  update = () => {
    this.chart.update();
  };
}
