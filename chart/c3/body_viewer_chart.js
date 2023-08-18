// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
  constructor() {
    this.chartContext = document.querySelector("#js-chart");
  }

  // 재설정함
  change = (
    weightLabels,
    weightValues,
    chestValues,
    waistValues,
    hipsValues,
    upperArmValues,
    thighValues
  ) => {
    weightValues.unshift("몸무게");
    chestValues.unshift("가슴 둘레");
    waistValues.unshift("허리 둘레");
    hipsValues.unshift("엉덩이 둘레");
    upperArmValues.unshift("위 팔 둘레");
    thighValues.unshift("허벅지 둘레");

    const chart = c3.generate({
      bindto: "#js-chart",
      size: {
        width: 700,
        height: 700,
      },
      data: {
        columns: [
          weightValues,
          chestValues,
          waistValues,
          hipsValues,
          upperArmValues,
          thighValues,
        ],
        type: "bar",
        types: {
          몸무게: "line",
          "가슴 둘레": "line",
          "허리 둘레": "line",
          "엉덩이 둘레": "line",
        },
      },
      axis: {
        x: {
          type: "category",
          categories: weightLabels,
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
        y: {
          min: 0,
          max: 100,
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
      },
      padding: {
        bottom: 30,
      },
    });

    this.show();
  };

  // 보여줌
  show = () => {
    this.chartContext.classList.remove("js-hide");
  };

  // 숨김
  hide = () => {
    this.chartContext.classList.add("js-hide");
  };
}
