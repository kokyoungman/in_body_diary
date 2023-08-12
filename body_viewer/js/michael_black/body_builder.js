// 자바스크립트 프로젝트 구현 - 바디 뷰어 (body_builder.js)

// 인터넷에서 다운로드 받은 후, 수정한 스크립트

var gender = "male";
var category = "all_" + gender;
var body_color = [0.5, 0.65, 1, 1];

var data_orders = [3, 4, 1, 0, 2, 5, 6]; // height (키), weight (몸무게), chest (가슴), waist (허리), hips (엉덩이), inseam (가랑이부터 바닥까지), exercise (일주일 운동 시간)
var model_loader = undefined;
var model = null;
var modelViewer = null;

var mu = null;
var sigma = null;
var conditional_multivariate_gaussian = null;

var preview_canvas = null;
var body_canvas = null;

var loadMesh = function (event) {
  var shapeinfo_url = "shapedata/" + gender + "/" + category + "/shapeinfo.js";
  var shape_data_directory = "shapedata/" + gender + "/" + category + "/";
  model_loader = new ModelLoader(
    shapeinfo_url,
    shape_data_directory,
    startViewer
  );
};

function CreateConditionalMultivariateGaussian() {
  mu = Array(data_orders.length);
  sigma = Array(data_orders.length);
  var unconditioned_indices = Array(data_orders.length);
  var conditioned_indices = [];
  var conditioned_values = [];

  for (var i = 0; i < data_orders.length; i++) {
    data_index = data_orders[i];
    mu[i] = model_loader.means[data_index];
    unconditioned_indices[i] = i;
    sigma[i] = Array(data_orders.length);
  }
  for (var i = 0; i < data_orders.length; i++) {
    var row_data_index = data_orders[i];
    for (var j = 0; j < data_orders.length; j++) {
      var column_data_index = data_orders[j];
      sigma[i][j] = model_loader.covariance[row_data_index][column_data_index];
    }
  }
  conditional_multivariate_gaussian = new ConditionalMultivariateGaussian(
    mu,
    sigma,
    unconditioned_indices,
    conditioned_indices,
    conditioned_values
  );
}

var startViewer = function (canvas, model) {
  if (modelViewer) {
    modelViewer.disconnect();
  }
  model_loader.current_model.setColor(body_color);
  try {
    var gl = canvas.getContext("experimental-webgl");
  } catch (e) {
    consle.log("브라우저가 WebGL을 지원하지 않습니다.");
  }
  controller = new CameraController(canvas);
  modelViewer = new ModelViewer([model], canvas, controller);
};

var updateModel = function (index, value) {
  var diff = 5;
  if (true) {
    conditional_multivariate_gaussian.condition_on_indices([index], [value]);
    for (var i = 0; i < data_orders.length; i++) {
      var value = conditional_multivariate_gaussian.all_values[i];
      model_loader.current_model.setScalefactor(i, (value - mu[i]) / diff);
    }
    refreshModel();
  }
};

var refreshModel = function () {
  try {
    modelViewer.repaint();
  } catch (e) {
    try {
      modelViewer.repaint();
    } catch (e) {
      modelViewer.repaint();
    }
  }
};

var initCanvasIds = function (previewViewerId, bodyViewerId) {
  preview_canvas = $(previewViewerId);
  body_canvas = $(bodyViewerId);

  preview_canvas.show();
  body_canvas.hide();
};

var switchGender = function () {
  if (gender == "male") gender = "female";
  else gender = "male";

  category = "all_" + gender;

  loadMesh();
};

var setBodyDatas = function (
  height,
  weight,
  chest,
  waist,
  hips,
  inseam,
  exercise
) {
  updateModel(0, height * 10);
  updateModel(1, Math.pow(weight, 1 / 3));
  updateModel(2, chest * 10);
  updateModel(3, waist * 10);
  updateModel(4, hips * 10);
  updateModel(5, inseam * 10);
  updateModel(6, exercise * 3);
};
