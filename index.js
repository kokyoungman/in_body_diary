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
inputs.push(document.querySelector(".js-input-7"));
inputs.push(document.querySelector(".js-input-8"));
inputs.push(document.querySelector(".js-input-9"));
let arrows = [];
let partArrows = [];
partArrows.push(document.querySelector(".js-arrow-0-0"));
partArrows.push(document.querySelector(".js-arrow-0-1"));
partArrows.push(document.querySelector(".js-arrow-0-2"));
partArrows.push(document.querySelector(".js-arrow-0-3"));
partArrows.push(document.querySelector(".js-arrow-0-4"));
partArrows.push(document.querySelector(".js-arrow-0-5"));
partArrows.push(document.querySelector(".js-arrow-0-6"));
arrows.push(partArrows);
partArrows = [];
partArrows.push(document.querySelector(".js-arrow-1-0"));
partArrows.push(document.querySelector(".js-arrow-1-1"));
partArrows.push(document.querySelector(".js-arrow-1-2"));
partArrows.push(document.querySelector(".js-arrow-1-3"));
partArrows.push(document.querySelector(".js-arrow-1-4"));
partArrows.push(document.querySelector(".js-arrow-1-5"));
partArrows.push(document.querySelector(".js-arrow-1-6"));
arrows.push(partArrows);
partArrows = [];
partArrows.push(document.querySelector(".js-arrow-2-0"));
partArrows.push(document.querySelector(".js-arrow-2-1"));
partArrows.push(document.querySelector(".js-arrow-2-2"));
partArrows.push(document.querySelector(".js-arrow-2-3"));
partArrows.push(document.querySelector(".js-arrow-2-4"));
partArrows.push(document.querySelector(".js-arrow-2-5"));
partArrows.push(document.querySelector(".js-arrow-2-6"));
arrows.push(partArrows);
partArrows = [];
partArrows.push(document.querySelector(".js-arrow-3-0"));
partArrows.push(document.querySelector(".js-arrow-3-1"));
partArrows.push(document.querySelector(".js-arrow-3-2"));
partArrows.push(document.querySelector(".js-arrow-3-3"));
partArrows.push(document.querySelector(".js-arrow-3-4"));
partArrows.push(document.querySelector(".js-arrow-3-5"));
partArrows.push(document.querySelector(".js-arrow-3-6"));
arrows.push(partArrows);
partArrows = [];
partArrows.push(document.querySelector(".js-arrow-4-0"));
partArrows.push(document.querySelector(".js-arrow-4-1"));
partArrows.push(document.querySelector(".js-arrow-4-2"));
partArrows.push(document.querySelector(".js-arrow-4-3"));
partArrows.push(document.querySelector(".js-arrow-4-4"));
partArrows.push(document.querySelector(".js-arrow-4-5"));
partArrows.push(document.querySelector(".js-arrow-4-6"));
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
const addBtn = document.querySelector(".js-add-btn");
const beforeBtn = document.querySelector(".js-before-btn");
const modeBtn = document.querySelector(".js-mode-btn");
const nextBtn = document.querySelector(".js-next-btn");

const MODE_LS = "mode";

const gapValues = [
  {
    weight: [45, 58, 62, 72, 84],
    bodyFat: ["-", 20, 30, 35, "+"],
    water: [37.8, 48.6, 53.0, 56.4, 59.9, 66.0],
    muscle: ["-", 24.2, 30.3, 35.3, "+"],
    bone: ["-", 2.2, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1000, 2200, "+"],
  },
  {
    weight: [62, 78, 84, 98, 113],
    bodyFat: ["-", 17, 23, 28, "+"],
    water: [37.8, 44.7, 48.1, 51.6, 55.0, 66.0],
    muscle: ["-", 33.3, 39.3, 43.8, "+"],
    bone: ["-", 2.9, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1100, 2400, "+"],
  },
];

const VIEW_DATA_TOTAL_COUNT = 5;
let viewDataStartIndex = 0;
let viewDataCount = VIEW_DATA_TOTAL_COUNT;

const saveDataValueStartIndex = 3;

function getRemainDay(startDate, endDate) {
  const elapsed = new Date(endDate - startDate);
  const secondsMs = Math.floor(elapsed / 1000);
  const minutesMs = Math.floor(secondsMs / 60);
  const hoursMs = Math.floor(minutesMs / 60);
  return Math.floor(hoursMs / 24);
}

function showBase() {
  const date = new Date();

  inputs[0].value = date.getFullYear();
  inputs[1].value = date.getMonth() + 1;
  inputs[2].value = date.getDate();

  if (select.selectedIndex == 0) {
    numbers.forEach((partNumbers) => {
      partNumbers.forEach((number) => {
        number.textContent = "";
      });
    });
  } else {
    numbers[0].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].weight[index];
    });
    numbers[1].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].bodyFat[index];
    });
    numbers[2].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].water[index];
    });
    numbers[3].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].muscle[index];
    });
    numbers[4].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].bone[index];
    });
    numbers[5].forEach((number, index) => {
      number.textContent =
        gapValues[select.selectedIndex - 1].visceralFat[index];
    });
    numbers[6].forEach((number, index) => {
      number.textContent = gapValues[select.selectedIndex - 1].calorie[index];
    });
  }

  const viewMode = localStorage.getItem(MODE_LS);
  if (viewMode !== null) viewDataCount = viewMode;
  modeBtn.value = `${viewDataCount}개씩`;
}

function addHistory() {
  if (select.selectedIndex == 0) return;

  if (
    inputs[0].value == "" ||
    inputs[1].value == "" ||
    inputs[2].value == "" ||
    inputs[3].value == "" ||
    inputs[4].value == "" ||
    inputs[5].value == "" ||
    inputs[6].value == "" ||
    inputs[7].value == "" ||
    inputs[8].value == "" ||
    inputs[9].value == ""
  ) {
    alert("모든 값을 입력해주세요.");
    return;
  }

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(select.selectedIndex);

  let isData = false;

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    parsedSaveDatas.forEach((saveData) => {
      if (
        saveData[0] == inputs[0].value &&
        saveData[1] == inputs[1].value &&
        saveData[2] == inputs[2].value
      )
        isData = true;
    });
  }

  if (isData) {
    if (confirm("이미 같은 날짜의 값이 있습니다. 변경하시겠습니까?"))
      isData = false;
  }

  if (isData == false) {
    for (let i = parsedSaveDatas.length - 1; i >= 0; i--) {
      if (
        parsedSaveDatas[i][0] == inputs[0].value &&
        parsedSaveDatas[i][1] == inputs[1].value &&
        parsedSaveDatas[i][2] == inputs[2].value
      )
        parsedSaveDatas.splice(i, 1);
    }

    parsedSaveDatas.push([
      inputs[0].value,
      inputs[1].value,
      inputs[2].value,
      inputs[3].value,
      inputs[4].value,
      inputs[5].value,
      inputs[6].value,
      inputs[7].value,
      inputs[8].value,
      inputs[9].value,
    ]);
  }

  parsedSaveDatas.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else {
      if (a[1] < b[1]) return -1;
      else if (a[1] > b[1]) return 1;
      else {
        if (a[2] < b[2]) return -1;
        else if (a[2] > b[2]) return 1;
        else return 0;
      }
    }
  });

  localStorage.setItem(select.selectedIndex, JSON.stringify(parsedSaveDatas));
}

function getViewCount(dataLength) {
  const result = dataLength - viewDataStartIndex;

  if (viewDataCount <= result) return viewDataCount;
  else return result;
}

function showHistory() {
  arrows.forEach((partArrows) => {
    partArrows.forEach((arrows) => {
      arrows.textContent = "";
    });
  });

  if (select.selectedIndex == 0) return;

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(select.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    parsedSaveDatas.reverse();

    const startDate = new Date(
      parsedSaveDatas[0][0],
      parsedSaveDatas[0][1],
      parsedSaveDatas[0][2]
    );

    parsedSaveDatas.forEach((saveData, index1) => {
      index1 -= viewDataStartIndex;

      const endDate = new Date(saveData[0], saveData[1], saveData[2]);
      const remainDay = getRemainDay(startDate, endDate);

      saveData.forEach((saveDataValue, index2) => {
        index2 -= saveDataValueStartIndex;

        const viewCount = getViewCount(parsedSaveDatas.length);
        console.log(viewCount);

        if (0 <= index1 && index1 < viewDataCount && 0 <= index2) {
          let targetGapValues;

          if (index2 == 0)
            targetGapValues = gapValues[select.selectedIndex - 1].weight;
          else if (index2 == 1)
            targetGapValues = gapValues[select.selectedIndex - 1].bodyFat;
          else if (index2 == 2)
            targetGapValues = gapValues[select.selectedIndex - 1].water;
          else if (index2 == 3)
            targetGapValues = gapValues[select.selectedIndex - 1].muscle;
          else if (index2 == 4)
            targetGapValues = gapValues[select.selectedIndex - 1].bone;
          else if (index2 == 5)
            targetGapValues = gapValues[select.selectedIndex - 1].visceralFat;
          else if (index2 == 6)
            targetGapValues = gapValues[select.selectedIndex - 1].calorie;

          let minIndex = 0;
          let minValue = 0;

          const maxValue = targetGapValues.find((value, index) => {
            if (index == 0) return false;

            minIndex = index - 1;
            minValue = targetGapValues[minIndex];

            if (targetGapValues.length - 1 == index) return true;

            return saveDataValue < value;
          });

          arrows[index1][index2].textContent = "🥕" + saveDataValue;
          if (remainDay != 0)
            arrows[index1][index2].textContent += `(D${remainDay})`;
          arrows[index1][index2].style.top =
            String(40 + (viewCount - 1 - index1) * 15) + "px";
          if (remainDay == 0)
            arrows[index1][index2].style.backgroundColor = "pink";
          else arrows[index1][index2].style.backgroundColor = "#F1FE2D";
          arrows[index1][index2].style.opacity =
            String(100 - index1 * 19) + "%";
          arrows[index1][index2].style.fontSize =
            String(20 - index1 * 4) + "px";
          arrows[index1][index2].style.fontWeight = "30px";

          const oneSize = 1 / (targetGapValues.length - 1);

          if (minValue == "-")
            //arrows[index1][index2].style.left = String(oneSize * 0.5 * 100) + "%";
            arrows[index1][index2].style.left = "0%";
          else if (maxValue == "+")
            //arrows[index1][index2].style.left = String(100 - oneSize * 0.5 * 100) + "%";
            arrows[index1][index2].style.left = "100%";
          else {
            const startPoint = oneSize * minIndex;

            const x = saveDataValue - minValue;
            const y = maxValue - minValue;

            if (minIndex == 0 && saveDataValue <= minValue)
              arrows[index1][index2].style.left = "0%";
            else if (
              minIndex == targetGapValues.length - 2 &&
              saveDataValue >= maxValue
            )
              arrows[index1][index2].style.left = "100%";
            else {
              const result = oneSize * (x / y);

              arrows[index1][index2].style.left =
                String((startPoint + result) * 100) + "%";
            }
          }
        }
      });
    });
  }
}

function handleChangeUser() {
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

function handleAddBtn(event) {
  event.preventDefault();

  addHistory();
  showHistory();
}

function handleBeforeBtn(event) {
  event.preventDefault();

  if (select.selectedIndex == 0) return;

  const saveDatas = localStorage.getItem(select.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    viewDataStartIndex++;

    if (viewDataStartIndex == parsedSaveDatas.length) {
      viewDataStartIndex = parsedSaveDatas.length - 1;
    }
    showHistory();
  }
}

function handleModeBtn(event) {
  event.preventDefault();

  viewDataCount++;

  if (VIEW_DATA_TOTAL_COUNT < viewDataCount) {
    viewDataCount = 1;
  }

  localStorage.setItem(MODE_LS, viewDataCount);
  modeBtn.value = `${viewDataCount}개씩`;

  showHistory();
}

function handleNextBtn(event) {
  event.preventDefault();

  if (select.selectedIndex == 0) return;

  const saveDatas = localStorage.getItem(select.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    viewDataStartIndex--;

    if (viewDataStartIndex < 0) {
      viewDataStartIndex = 0;
    }
    showHistory();
  }
}

function init() {
  showBase();

  select.addEventListener("change", handleChangeUser);
  addBtn.addEventListener("click", handleAddBtn);
  beforeBtn.addEventListener("click", handleBeforeBtn);
  modeBtn.addEventListener("click", handleModeBtn);
  nextBtn.addEventListener("click", handleNextBtn);
}

init();
