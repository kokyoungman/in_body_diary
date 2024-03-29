// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_chart.js)

class BodyViewerChart {
  constructor(selector) {
    this.selector = selector;
    this.chartContext = document.querySelector(this.selector);
  }

  // 재설정함
  change = (title, width, height, labels, values, inches = null) => {
    values.unshift(title);

    const chart = c3.generate({
      bindto: this.selector,
      size: {
        width: width,
        height: height,
      },
      data: {
        columns: [values],
        labels: {
          format: function (v, id, i, j) {
            if (inches != null) {
              return v + " / " + inches[i];
            } else {
              return v;
            }
          },
        },
        type: "bar",
        color: function (color, d) {
          return "rgba(6, 176, 254, 0.3)";
        },
      },
      axis: {
        rotated: true,
        x: {
          type: "category",
          categories: labels,
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
          tick: {
            multiline: false,
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
      tooltip: {
        show: true,
      },
      legend: {
        show: false,
      },
      padding: {
        bottom: 0,
      },
    });
  };
}
