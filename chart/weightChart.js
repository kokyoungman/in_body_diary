// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (weightChart.js)

class WeightChart {
  constructor(labels, values, kgs, gradeValues, gradeKgs) {
    const canvasContext = document
      .querySelector("#js-chart-canvas")
      .getContext("2d");
    const type = "bar";
    const datasets = [];
    const plugins = [ChartDataLabels];

    const dataset = {
      label: "BMI",
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
          max: 55,
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
            return `${value} BMI (${kgs[context.dataIndex]}kg)`;
          },
        },
        gradeDraw: {
          gradeValues,
          gradeKgs,
        },
      },
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
        options.gradeValues.forEach((gradeValue) => {
          gradePosXs.push(x.getPixelForValue(gradeValue));
        });

        const gradeColors = [
          "#06B0FE",
          "#88E53F",
          "#FFC902",
          "#FF8A07",
          "#FF591A",
          "#F90000",
        ];

        const gradeTexts = [
          "저체중",
          "정상",
          "과체중",
          "비만",
          "고도 비만",
          "병적 비만",
        ];

        gradeColors.forEach((gradeColor, index) => {
          ctx.save();

          ctx.fillStyle = gradeColor;
          ctx.fillRect(
            gradePosXs[index],
            top,
            gradePosXs[index + 1] - gradePosXs[index],
            bottom - top
          );
          ctx.fillText(`${gradeTexts[index]}`, gradePosXs[index], top - 40);
          ctx.fillText(
            `${options.gradeValues[index]} BMI ~`,
            gradePosXs[index],
            top - 25
          );
          ctx.fillText(
            `${options.gradeKgs[index]}kg ~`,
            gradePosXs[index],
            top - 10
          );

          canvasContext.restore();
        });
      },
    };
    plugins.push(gradeDraw);

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
  change = (labels, values, kgs, gradeValues, gradeKgs) => {
    this.baseChart.changeLabels(labels);
    this.baseChart.changeValues(0, values);

    this.baseChart.chart.config.options.plugins.datalabels.formatter = (
      value,
      context
    ) => {
      return `${value} BMI (${kgs[context.dataIndex]}kg)`;
    };
    this.baseChart.chart.config.options.plugins.gradeDraw.gradeValues =
      gradeValues;
    this.baseChart.chart.config.options.plugins.gradeDraw.gradeKgs = gradeKgs;

    this.baseChart.update();
  };
}
