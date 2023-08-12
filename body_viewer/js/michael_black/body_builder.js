// 자바스크립트 프로젝트 구현 - 바디 뷰어 (body_builder.js)

// 인터넷에서 다운로드 받은 후, 수정한 스크립트

var gender = "male";
var category = "all_" + gender;
var body_color = [0.5, 0.65, 1, 1];

var data_height = -1;
var data_weight = -1;
var data_chest = -1;
var data_waist = -1;
var data_hips = -1;
var data_inseam = -1;
var data_exercise = -1;

var data_orders = [3, 4, 1, 0, 2, 5, 6];
var model_loader = undefined;
var model = null;
var modelViewer = null;

var mu = null;
var sigma = null;
var conditional_multivariate_gaussian = null;

var preview_canvas = null;
var body_canvas = null;

var initCanvasIds = function (previewViewerId, bodyViewerId) {
  preview_canvas = $(previewViewerId);
  body_canvas = $(bodyViewerId);

  preview_canvas.show();
  body_canvas.hide();
};

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

  if (data_height != -1) updateModel(0, data_height * 10);
  if (data_weight != -1) updateModel(1, Math.pow(data_weight, 1 / 3));
  if (data_chest != -1) updateModel(2, data_chest * 10);
  if (data_waist != -1) updateModel(3, data_waist * 10);
  if (data_hips != -1) updateModel(4, data_hips * 10);
  if (data_inseam != -1) updateModel(5, data_inseam * 10);
  if (data_exercise != -1) updateModel(6, data_exercise * 3);

  try {
    var gl = canvas.getContext("experimental-webgl");
  } catch (e) {
    consle.log("브라우저가 WebGL을 지원하지 않습니다.");
  }
  controller = new CameraController(canvas);
  modelViewer = new ModelViewer([model], canvas, controller);

  refreshModel();

  preview_canvas.hide();
  body_canvas.show();
};

var updateModel = function (index, value) {
  var diff = 5;
  conditional_multivariate_gaussian.condition_on_indices([index], [value]);
  for (var i = 0; i < data_orders.length; i++) {
    var value = conditional_multivariate_gaussian.all_values[i];
    model_loader.current_model.setScalefactor(i, (value - mu[i]) / diff);
  }
};

var refreshModel = function () {
  if (modelViewer == null) {
    return;
  }

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

var switchGender = function () {
  if (gender == "male") gender = "female";
  else gender = "male";

  category = "all_" + gender;

  loadMesh();
};

var setHeight = function (height) {
  data_height = height;
  updateModel(0, data_height * 10);

  refreshModel();
};

var setWeight = function (weight) {
  data_weight = weight;
  updateModel(1, Math.pow(data_weight, 1 / 3));

  refreshModel();
};

var setChest = function (chest) {
  data_chest = chest;
  updateModel(2, data_chest * 10);

  refreshModel();
};

var setWaist = function (waist) {
  data_waist = waist;
  updateModel(3, data_waist * 10);

  refreshModel();
};

var setHips = function (hips) {
  data_hips = hips;
  updateModel(4, data_hips * 10);

  refreshModel();
};

var setInseam = function (inseam) {
  data_inseam = inseam;
  updateModel(5, data_inseam * 10);

  refreshModel();
};

var setExercise = function (exercise) {
  data_exercise = exercise;
  updateModel(6, data_exercise * 3);

  refreshModel();
};

var setBody = function (height, weight, chest, waist, hips, inseam, exercise) {
  setHeight(height);
  setWeight(weight);
  setChest(chest);
  setWaist(waist);
  setHips(hips);
  setInseam(inseam);
  setExercise(exercise);

  refreshModel();
};
