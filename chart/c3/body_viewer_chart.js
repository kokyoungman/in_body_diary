// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
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
      },
      axis: {
        rotated: true,
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
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
  };
}
