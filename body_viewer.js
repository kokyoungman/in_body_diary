// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer.js)

// '바디 뷰어'에서 추가함

const changeGender = () => {
  switchGender();
};

const setDatas1 = () => {
  const height = 180; // 키
  const weight = 76; // 몸무게
  const chest = 91.6; // 가슴
  const waist = 81.7; // 허리
  const hips = 96.5; // 엉덩이
  const inseam = 80; // 가랑이부터 바닥까지
  const exercise = 0; // 일주일 운동 시간
  setBody(height, weight, chest, waist, hips, inseam, exercise);
};

const setDatas2 = () => {
  const height = 155;
  const weight = 58;
  const chest = 92.2;
  const waist = 80.5;
  const hips = 93.8;
  const inseam = 82;
  const exercise = 0;
  setBody(height, weight, chest, waist, hips, inseam, exercise);
};

const weightCanvasContext = document
  .querySelector("#js-weight-chart-canvas")
  .getContext("2d");
const chestCanvasContext = document
  .querySelector("#js-chest-chart-canvas")
  .getContext("2d");
const waistCanvasContext = document
  .querySelector("#js-waist-chart-canvas")
  .getContext("2d");
const hipsCanvasContext = document
  .querySelector("#js-hips-chart-canvas")
  .getContext("2d");
const upperArmCanvasContext = document
  .querySelector("#js-upper-arm-chart-canvas")
  .getContext("2d");
const thighCanvasContext = document
  .querySelector("#js-thigh-chart-canvas")
  .getContext("2d");
weightChart = new BodyViewerChart(weightCanvasContext, "Weight", [], []);
chestChart = new BodyViewerChart(chestCanvasContext, "Chest", [], []);
waistChart = new BodyViewerChart(waistCanvasContext, "Waist", [], []);
hipsChart = new BodyViewerChart(hipsCanvasContext, "Hips", [], []);
upperArmChart = new BodyViewerChart(upperArmCanvasContext, "UpperArm", [], []);
thighChart = new BodyViewerChart(thighCanvasContext, "Thigh", [], []);

bodyViewerManager = new BodyViewerManager(document, weightChart, chestChart);
bodyViewerManager.init();

initCanvasIds("preview-viewer", "body-viewer");
loadMesh();
