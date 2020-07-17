const select = document.querySelector("select");
const options = document.querySelectorAll("option");
const baseData = document.querySelector(".js-base-data");

let inputs = [];
inputs.push(document.querySelector(".js-input-0"));
inputs.push(document.querySelector(".js-input-1"));
inputs.push(document.querySelector(".js-input-2"));
inputs.push(document.querySelector(".js-input-3"));
inputs.push(document.querySelector(".js-input-4"));
let results = [];
results.push(document.querySelector(".js-result-0"));
results.push(document.querySelector(".js-result-1"));
results.push(document.querySelector(".js-result-2"));
results.push(document.querySelector(".js-result-3"));
results.push(document.querySelector(".js-result-4"));
const button = document.querySelector(".js-button");

function showHistory() {
  if (select.selectedIndex == 0) return;

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(select.selectedIndex);

  results.forEach((result) => {
    result.textContent = "결과";
  });

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);
    parsedSaveDatas.forEach(function (saveData) {
      baseData.textContent = baseData.textContent + "\n";
      saveData.forEach(function (data, index) {
        if (index < 3) return;
        results[index - 3].textContent =
          results[index - 3].textContent + " 🤍 " + data;
      });
    });
  }
}

function addHistory() {
  if (select.selectedIndex == 0) return;

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(select.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);
  }

  const date = new Date();

  parsedSaveDatas.push([
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    inputs[4].value,
  ]);

  localStorage.setItem(select.selectedIndex, JSON.stringify(parsedSaveDatas));
}

function handleChange() {
  index = 0;

  if (options[0].selected === true) {
    baseData.textContent = "";
  } else if (options[1].selected === true) {
    baseData.textContent = "나이 : 38 / 키 : 155";
  } else if (options[2].selected === true) {
    baseData.textContent = "나이 : 37 / 키 : 180";
  }

  showHistory();
}

function handleSubmit(event) {
  event.preventDefault();

  addHistory();
  showHistory();
}

function init() {
  select.addEventListener("change", handleChange);
  button.addEventListener("click", handleSubmit);
}

init();
