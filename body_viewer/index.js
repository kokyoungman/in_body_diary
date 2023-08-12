// 자바스크립트 프로젝트 구현 - 바디 뷰어 (index.js)

const changeGender = () => {
  switchGender();
};

const setDatas1 = () => {
  const height = 180;
  const weight = 76;
  const chest = 91.6;
  const waist = 81.7;
  const hips = 96.5;
  const inseam = 80;
  const exercise = 0;
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

initCanvasIds("preview-viewer", "body-viewer");
loadMesh();
