// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (weightChart.js)

class WeightChart {
  constructor(labels, values, weightKgs, gradeDrawValues) {
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
      plugins: {
        title: {
          display: true,
          text: "BMI",
          align: "end",
        },
        legend: {
          display: false,
        },
        datalabels: {
          color: "#020202",
          anchor: "end",
          align: "start",
          formatter: (value, context) => {
            return `${value} BMI (${weightKgs[context.dataIndex]}kg)`;
          },
        },
        gradeDraw: {
          value0: gradeDrawValues[0],
          value1: gradeDrawValues[1],
          value2: gradeDrawValues[2],
          value3: gradeDrawValues[3],
          value4: gradeDrawValues[4],
          value5: gradeDrawValues[5],
          value6: gradeDrawValues[6],
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

        const optionValues = [];
        optionValues.push(options.value0);
        optionValues.push(options.value1);
        optionValues.push(options.value2);
        optionValues.push(options.value3);
        optionValues.push(options.value4);
        optionValues.push(options.value5);
        optionValues.push(options.value6);

        const gradePosXs = [];
        optionValues.forEach((optionValue) => {
          gradePosXs.push(x.getPixelForValue(optionValue));
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
          ctx.fillText(
            `${optionValues[index]} ${gradeTexts[index]}`,
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
  change = (labels, values, weightKgs, gradeDrawValues) => {
    this.baseChart.changeLabels(labels);
    this.baseChart.changeValues(0, values);
    this.baseChart.chart.config.options.plugins.datalabels.formatter = (
      value,
      context
    ) => {
      return `${value} BMI (${weightKgs[context.dataIndex]}kg)`;
    };
    this.baseChart.changeGradeDrawValues(gradeDrawValues);
    this.baseChart.update();
  };
}
