// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (index.js)

// 유저 선택 칸
const userSelect = document.querySelector("select");
// 유저 선택 옵션들
const userSelectOptions = document.querySelectorAll("option");

// 유저 기본 데이터
const userBaseData = document.querySelector(".js-base-data");

// 입력하는 칸들
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

// 화살표들
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

// 숫자들
let numbers = [];
let partNumbers = [];
partNumbers.push(document.querySelector(".js-number-0-0"));
partNumbers.push(document.querySelector(".js-number-0-1"));
partNumbers.push(document.querySelector(".js-number-0-2"));
partNumbers.push(document.querySelector(".js-number-0-3"));
partNumbers.push(document.querySelector(".js-number-0-4"));
partNumbers.push(document.querySelector(".js-number-0-5"));
partNumbers.push(document.querySelector(".js-number-0-6"));
partNumbers.push(document.querySelector(".js-number-0-7"));
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
partNumbers.push(document.querySelector(".js-number-4-3"));
partNumbers.push(document.querySelector(".js-number-4-4"));
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

// 등급 텍스트들
let gradeTexts = [];
let partGradeTexts = [];
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
partGradeTexts.push(document.querySelector(".js-grade-text-4-0"));
partGradeTexts.push(document.querySelector(".js-grade-text-4-1"));
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
gradeTexts.push(partGradeTexts);
partGradeTexts = [];
gradeTexts.push(partGradeTexts);

// 추가 버튼
const addBtn = document.querySelector(".js-add-btn");

// 이전 버튼
const beforeBtn = document.querySelector(".js-before-btn");

// 모드 변경 버튼
const modeChangeBtn = document.querySelector(".js-mode-change-btn");

// 다음 버튼
const nextBtn = document.querySelector(".js-next-btn");

// 모드 로컬 저장소
const MODE_LS = "mode";

// 간격 값들
const gapValues = [
  {
    weight: [45, 55, 58, 60, 62, 69, 72, 84],
    bodyFat: ["-", 20, 30, 35, "+"],
    water: [37.8, 44.7, 48.1, 51.6, 55.0, 66.0],
    muscle: ["-", 24.1, 30.1, 35.1, "+"],
    bone: ["-", 1.8, 2.2, 2.5, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1000, 2200, "+"],
  },
  {
    weight: [62, 75, 78, 81, 84, 94, 98, 113],
    bodyFat: ["-", 17, 23, 28, "+"],
    water: [37.8, 48.8, 52.3, 55.7, 59.1, 66.0],
    muscle: ["-", 33.3, 39.3, 43.8, "+"],
    bone: ["-", 2.5, 2.9, 3.2, "+"],
    visceralFat: [1, 9, 14, 30],
    calorie: ["-", 1100, 2400, "+"],
  },
];

// 등급 텍스트 값들
const gradeTextValues = [
  {
    bone: [45, 60],
  },
  {
    bone: [60, 75],
  },
];

// 보여줄 데이터 갯수
const MAX_VIEW_DATA_COUNT = 5;
let viewDataStartIndex = 0;
let viewDataCount = MAX_VIEW_DATA_COUNT;

// 저장 데이터 값의 시작 인덱스
const saveDataValueStartIndex = 3;

// 남은 일수를 가져옴
const getRemainDay = (startDate, endDate) => {
  const elapsed = new Date(endDate - startDate);
  const secondsMs = Math.floor(elapsed / 1000);
  const minutesMs = Math.floor(secondsMs / 60);
  const hoursMs = Math.floor(minutesMs / 60);
  return Math.floor(hoursMs / 24);
};

// 유저 기본 데이터를 보여줌
const showUserBaseData = () => {
  // 입력값을 모두 초기화함
  inputs.forEach((input) => {
    input.value = "";
  });

  // 현재 날짜와 시간을 입력값에 넣음
  const date = new Date();
  inputs[0].value = date.getFullYear();
  inputs[1].value = date.getMonth() + 1;
  inputs[2].value = date.getDate();

  // 유저 선택에 따라 숫자들에 간격 값들을 넣음
  if (userSelect.selectedIndex == 0) {
    numbers.forEach((partNumbers) => {
      partNumbers.forEach((number) => {
        number.textContent = "";
      });
    });

    gradeTexts.forEach((partGradeTexts) => {
      partGradeTexts.forEach((gradeText) => {
        gradeText.textContent = "";
      });
    });
  } else {
    numbers[0].forEach((number, index) => {
      number.textContent =
        gapValues[userSelect.selectedIndex - 1].weight[index];
    });
    numbers[1].forEach((number, index) => {
      number.textContent =
        gapValues[userSelect.selectedIndex - 1].bodyFat[index];
    });
    numbers[2].forEach((number, index) => {
      number.textContent = gapValues[userSelect.selectedIndex - 1].water[index];
    });
    numbers[3].forEach((number, index) => {
      number.textContent =
        gapValues[userSelect.selectedIndex - 1].muscle[index];
    });
    numbers[4].forEach((number, index) => {
      number.textContent = gapValues[userSelect.selectedIndex - 1].bone[index];
    });
    numbers[5].forEach((number, index) => {
      number.textContent =
        gapValues[userSelect.selectedIndex - 1].visceralFat[index];
    });
    numbers[6].forEach((number, index) => {
      number.textContent =
        gapValues[userSelect.selectedIndex - 1].calorie[index];
    });

    gradeTexts[4].forEach((gradeText, index) => {
      gradeText.textContent =
        gradeTextValues[userSelect.selectedIndex - 1].bone[index] +
        "kg 미만이면, 건강";
    });
  }

  // 로컬 저장소에서 모드의 값을 가져와서 적용함
  const viewMode = localStorage.getItem(MODE_LS);
  if (viewMode !== null) viewDataCount = viewMode;
  modeChangeBtn.value = `${viewDataCount}개씩`;
};

// 히스토리를 추가함
const addHistory = () => {
  // 유저를 선택하지 않았다면, 끝냄
  if (userSelect.selectedIndex == 0) return;

  // 모든 값을 입력하지 않았다면, 알림을 출력하고 끝냄
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

  let parsedSaveDatas = []; // 분석한 저장 데이터들
  let isData = false; // 데이터 유무

  // 로컬 저장소에서 해당 유저의 값을 가져와서 있으면, 변경할지 여부를 확인하고, 없으면 저장함
  const saveDatas = localStorage.getItem(userSelect.selectedIndex);

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

  localStorage.setItem(
    userSelect.selectedIndex,
    JSON.stringify(parsedSaveDatas)
  );
};

// 보여줄 갯수를 가져옴
const getViewCount = (dataLength) => {
  const result = dataLength - viewDataStartIndex;

  if (viewDataCount <= result) return viewDataCount;
  else return result;
};

// 히스토리를 보여줌
const showHistory = () => {
  arrows.forEach((partArrows) => {
    partArrows.forEach((arrows) => {
      arrows.textContent = "";
    });
  });

  if (userSelect.selectedIndex == 0) return;

  let parsedSaveDatas = [];

  const saveDatas = localStorage.getItem(userSelect.selectedIndex);

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
            targetGapValues = gapValues[userSelect.selectedIndex - 1].weight;
          else if (index2 == 1)
            targetGapValues = gapValues[userSelect.selectedIndex - 1].bodyFat;
          else if (index2 == 2)
            targetGapValues = gapValues[userSelect.selectedIndex - 1].water;
          else if (index2 == 3)
            targetGapValues = gapValues[userSelect.selectedIndex - 1].muscle;
          else if (index2 == 4)
            targetGapValues = gapValues[userSelect.selectedIndex - 1].bone;
          else if (index2 == 5)
            targetGapValues =
              gapValues[userSelect.selectedIndex - 1].visceralFat;
          else if (index2 == 6)
            targetGapValues = gapValues[userSelect.selectedIndex - 1].calorie;

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

          if (index2 == 0) {
            bmi = 0;
            if (userSelect.selectedIndex == 1)
              bmi = saveDataValue / (1.55 * 1.55); // 키 155
            if (userSelect.selectedIndex == 2)
              bmi = saveDataValue / (1.8 * 1.8); // 키 180
            arrows[index1][index2].textContent += `kg / ${bmi.toFixed(1)} BMI`;
          } else if (index2 == 1 || index2 == 2 || index2 == 3)
            arrows[index1][index2].textContent += "%";
          else if (index2 == 4) arrows[index1][index2].textContent += "kg";
          else if (index2 == 6) arrows[index1][index2].textContent += " KCAL";

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
};

// 유저를 변경함
const handleChangeUser = () => {
  if (userSelectOptions[0].selected === true) {
    userBaseData.textContent = "";
  } else if (userSelectOptions[1].selected === true) {
    userBaseData.textContent = "나이 : 40 / 키 : 155";
  } else if (userSelectOptions[2].selected === true) {
    userBaseData.textContent = "나이 : 39 / 키 : 180";
  }

  showUserBaseData();
  showHistory();
};

// 유저를 체크함
const handleCheckUser = (event) => {
  event.preventDefault();

  if (userSelect.selectedIndex == 0) {
    alert("사용자를 선택하세요.");
    return;
  }
};

// 추가 버튼을 누름
const handleAddBtn = (event) => {
  event.preventDefault();

  handleCheckUser(event);

  addHistory();
  showHistory();
};

// 이전 버튼을 누름
const handleBeforeBtn = (event) => {
  event.preventDefault();

  if (userSelect.selectedIndex == 0) return;

  const saveDatas = localStorage.getItem(userSelect.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    viewDataStartIndex++;

    if (viewDataStartIndex == parsedSaveDatas.length) {
      viewDataStartIndex = parsedSaveDatas.length - 1;
    }
    showHistory();
  }
};

// 모드 변경 버튼을 누름
const handleModeChangeBtn = (event) => {
  event.preventDefault();

  viewDataCount++;

  if (MAX_VIEW_DATA_COUNT < viewDataCount) {
    viewDataCount = 1;
  }

  localStorage.setItem(MODE_LS, viewDataCount);
  modeChangeBtn.value = `${viewDataCount}개씩`;

  showHistory();
};

// 다음 버튼을 누름
const handleNextBtn = (event) => {
  event.preventDefault();

  if (userSelect.selectedIndex == 0) return;

  const saveDatas = localStorage.getItem(userSelect.selectedIndex);

  if (saveDatas !== null) {
    parsedSaveDatas = JSON.parse(saveDatas);

    viewDataStartIndex--;

    if (viewDataStartIndex < 0) {
      viewDataStartIndex = 0;
    }
    showHistory();
  }
};

// 초기화함
const init = () => {
  showUserBaseData();

  userSelect.addEventListener("change", handleChangeUser);
  inputs.forEach((input) => {
    input.addEventListener("click", handleCheckUser);
  });
  addBtn.addEventListener("click", handleAddBtn);
  beforeBtn.addEventListener("click", handleBeforeBtn);
  modeChangeBtn.addEventListener("click", handleModeChangeBtn);
  nextBtn.addEventListener("click", handleNextBtn);
};

init();
