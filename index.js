// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (index.js)

const worldCanvasContext = document
  .querySelector("#js-world-chart-canvas")
  .getContext("2d");
const koreaCanvasContext = document
  .querySelector("#js-korea-chart-canvas")
  .getContext("2d");
worldWeightChart = new WeightChart(worldCanvasContext, [], [], [], [], []);
koreaWeightChart = new WeightChart(koreaCanvasContext, [], [], [], [], []);

mainManager = new MainManager(document, worldWeightChart, koreaWeightChart);
mainManager.init();
