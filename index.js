const select = document.querySelector("select");
const options = document.querySelectorAll("option");
const baseData = document.querySelector(".js-base-data");

let inputs = [];
inputs.push(document.querySelector(".js-input-0"));
inputs.push(document.querySelector(".js-input-1"));
inputs.push(document.querySelector(".js-input-2"));
inputs.push(document.querySelector(".js-input-3"));
inputs.push(document.querySelector(".js-input-4"));
inputs.push(document.querySelector(".js-input-5"));
inputs.push(document.querySelector(".js-input-6"));
let arrows = [];
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-0-0"));
arrows.push(document.querySelector(".js-arrow-0-1"));
arrows.push(document.querySelector(".js-arrow-0-2"));
arrows.push(document.querySelector(".js-arrow-0-3"));
arrows.push(document.querySelector(".js-arrow-0-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-1-0"));
arrows.push(document.querySelector(".js-arrow-1-1"));
arrows.push(document.querySelector(".js-arrow-1-2"));
arrows.push(document.querySelector(".js-arrow-1-3"));
arrows.push(document.querySelector(".js-arrow-1-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-2-0"));
arrows.push(document.querySelector(".js-arrow-2-1"));
arrows.push(document.querySelector(".js-arrow-2-2"));
arrows.push(document.querySelector(".js-arrow-2-3"));
arrows.push(document.querySelector(".js-arrow-2-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-3-0"));
arrows.push(document.querySelector(".js-arrow-3-1"));
arrows.push(document.querySelector(".js-arrow-3-2"));
arrows.push(document.querySelector(".js-arrow-3-3"));
arrows.push(document.querySelector(".js-arrow-3-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-4-0"));
arrows.push(document.querySelector(".js-arrow-4-1"));
arrows.push(document.querySelector(".js-arrow-4-2"));
arrows.push(document.querySelector(".js-arrow-4-3"));
arrows.push(document.querySelector(".js-arrow-4-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-5-0"));
arrows.push(document.querySelector(".js-arrow-5-1"));
arrows.push(document.querySelector(".js-arrow-5-2"));
arrows.push(document.querySelector(".js-arrow-5-3"));
arrows.push(document.querySelector(".js-arrow-5-4"));
arrows.push(partArrows);
let partArrows = [];
arrows.push(document.querySelector(".js-arrow-6-0"));
arrows.push(document.querySelector(".js-arrow-6-1"));
arrows.push(document.querySelector(".js-arrow-6-2"));
arrows.push(document.querySelector(".js-arrow-6-3"));
arrows.push(document.querySelector(".js-arrow-6-4"));
arrows.push(partArrows);
let numbers = [];
let partNumbers = [];
partNumbers.push(document.querySelector(".js-number-0-0"));
partNumbers.push(document.querySelector(".js-number-0-1"));
partNumbers.push(document.querySelector(".js-number-0-2"));
partNumbers.push(document.querySelector(".js-number-0-3"));
partNumbers.push(document.querySelector(".js-number-0-4"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-1-0"));
partNumbers.push(document.querySelector(".js-number-1-1"));
partNumbers.push(document.querySelector(".js-number-1-2"));
partNumbers.push(document.querySelector(".js-number-1-3"));
partNumbers.push(document.querySelector(".js-number-1-4"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-2-0"));
partNumbers.push(document.querySelector(".js-number-2-1"));
partNumbers.push(document.querySelector(".js-number-2-2"));
partNumbers.push(document.querySelector(".js-number-2-3"));
partNumbers.push(document.querySelector(".js-number-2-4"));
partNumbers.push(document.querySelector(".js-number-2-5"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-3-0"));
partNumbers.push(document.querySelector(".js-number-3-1"));
partNumbers.push(document.querySelector(".js-number-3-2"));
partNumbers.push(document.querySelector(".js-number-3-3"));
partNumbers.push(document.querySelector(".js-number-3-4"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-4-0"));
partNumbers.push(document.querySelector(".js-number-4-1"));
partNumbers.push(document.querySelector(".js-number-4-2"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-5-0"));
partNumbers.push(document.querySelector(".js-number-5-1"));
partNumbers.push(document.querySelector(".js-number-5-2"));
partNumbers.push(document.querySelector(".js-number-5-3"));
numbers.push(partNumbers);
partNumbers = [];
partNumbers.push(document.querySelector(".js-number-6-0"));
partNumbers.push(document.querySelector(".js-number-6-1"));
partNumbers.push(document.querySelector(".js-number-6-2"));
partNumbers.push(document.querySelector(".js-number-6-3"));
numbers.push(partNumbers);
const button = document.querySelector(".js-button");

const values = [
  {
    weight: [19, 23, 25, 29, 35],
    bodyFat: ["-", 20, 30, 35, "+"],
    water: [37.8, 48.6, 53.0, 56.4, 59.9, 66.0],
    muscle: ["-", 24.2, 30.3, 35.3, "+"],
    bone: ["-", 2.2, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1000, 2200, "+"],
  },
  {
    weight: [19, 23, 25, 29, 35],
    bodyFat: ["-", 17, 23, 28, "+"],
    water: [37.8, 44.7, 48.1, 51.6, 55.0, 66.0],
    muscle: ["-", 33.3, 39.3, 43.8, "+"],
    bone: ["-", 2.9, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1100, 2400, "+"],
  },
];

const saveDataStartIndex = 3;

function showBase() {
  if (select.selectedIndex == 0) {
    numbers.forEach((partNumbers) => {
      partNumbers.forEach((number) => {
        number.textContent = "";
      });
    });
    return;
  }

  numbers[0].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].weight[index];
  });
  numbers[1].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].bodyFat[index];
  });
  numbers[2].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].water[index];
  });
  numbers[3].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].muscle[index];
  });
  numbers[4].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].bone[index];
  });
  numbers[5].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].visceralFat[index];
  });
  numbers[6].forEach((number, index) => {
    number.textContent = values[select.selectedIndex - 1].calorie[index];
  });
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
    inputs[5].value,
    inputs[6].value,
  ]);

  localStorage.setItem(select.selectedIndex, JSON.stringify(parsedSaveDatas));
}

function showHistory() {
  if (select.selectedIndex == 0) return;

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(select.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);
    //parsedSaveDatas.reverse();    // arrow 추가할 것
    console.log(parsedSaveDatas);
    parsedSaveDatas.forEach((saveData) => {
      saveData.forEach((data, index) => {
        index = index - saveDataStartIndex;

        if (index >= 0) {
          let targetValues;

          if (index == 0)
            targetValues = values[select.selectedIndex - 1].weight;
          else if (index == 1)
            targetValues = values[select.selectedIndex - 1].bodyFat;
          else if (index == 2)
            targetValues = values[select.selectedIndex - 1].water;
          else if (index == 3)
            targetValues = values[select.selectedIndex - 1].muscle;
          else if (index == 4)
            targetValues = values[select.selectedIndex - 1].bone;
          else if (index == 5)
            targetValues = values[select.selectedIndex - 1].visceralFat;
          else if (index == 6)
            targetValues = values[select.selectedIndex - 1].calorie;

          let minIndex = 0;
          let minValue = 0;

          const maxValue = targetValues.find((value, index) => {
            if (index == 0) return false;

            minIndex = index - 1;
            minValue = targetValues[minIndex];

            if (targetValues.length - 1 == index) return true;

            return data < value;
          });

          arrows[index].textContent = "🥕" + data;

          const oneSize = 1 / (targetValues.length - 1);

          if (minValue == "-")
            arrows[index].style.left = String(oneSize * 0.5 * 100) + "%";
          else if (maxValue == "+")
            arrows[index].style.left = String(100 - oneSize * 0.5 * 100) + "%";
          else {
            const startPoint = oneSize * minIndex;

            const x = data - minValue;
            const y = maxValue - minValue;

            if (data <= minValue) arrows[index].style.left = "0%";
            else if (data >= maxValue) arrows[index].style.left = "100%";
            else {
              const result = oneSize * (x / y);

              arrows[index].style.left =
                String((startPoint + result) * 100) + "%";
            }
          }
        }
      });
    });
  }
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

  showBase();
  showHistory();
}

function handleSubmit(event) {
  event.preventDefault();

  addHistory();
  showHistory();
}

function init() {
  showBase();

  select.addEventListener("change", handleChange);
  button.addEventListener("click", handleSubmit);
}

init();
