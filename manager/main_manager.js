// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (main_manager.js)

class MainManager {
  constructor(document, worldWeightChart, koreaWeightChart) {
    // 차트
    this.worldWeightChart = worldWeightChart;
    this.koreaWeightChart = koreaWeightChart;

    // 유저
    this.userAge;
    this.userHeight;

    // 유저 선택 칸
    this.userSelect = document.querySelector("select");
    // 유저 선택 옵션들
    this.userSelectOptions = document.querySelectorAll("option");

    // 유저 기본 데이터
    this.userBaseData = document.querySelector(".js-base-data");

    // 입력하는 칸들
    this.inputs = [];
    this.inputs.push(document.querySelector(".js-input-year"));
    this.inputs.push(document.querySelector(".js-input-month"));
    this.inputs.push(document.querySelector(".js-input-day"));
    this.inputs.push(document.querySelector(".js-input-bmi"));
    this.inputs.push(document.querySelector(".js-input-weight"));
    this.inputs.push(document.querySelector(".js-input-bodyFat"));
    this.inputs.push(document.querySelector(".js-input-water"));
    this.inputs.push(document.querySelector(".js-input-muscle"));
    this.inputs.push(document.querySelector(".js-input-bone"));
    this.inputs.push(document.querySelector(".js-input-visceralFat"));
    this.inputs.push(document.querySelector(".js-input-calorie"));

    // 바들
    this.bars1 = document.querySelector(".js-bars-1");
    this.bars2 = document.querySelector(".js-bars-2");

    // 화살표들
    this.arrows = [];
    let partArrows = [];
    partArrows.push(document.querySelector(".js-arrow-0-0"));
    partArrows.push(document.querySelector(".js-arrow-0-1"));
    partArrows.push(document.querySelector(".js-arrow-0-2"));
    partArrows.push(document.querySelector(".js-arrow-0-3"));
    partArrows.push(document.querySelector(".js-arrow-0-4"));
    partArrows.push(document.querySelector(".js-arrow-0-5"));
    partArrows.push(document.querySelector(".js-arrow-0-6"));
    this.arrows.push(partArrows);
    partArrows = [];
    partArrows.push(document.querySelector(".js-arrow-1-0"));
    partArrows.push(document.querySelector(".js-arrow-1-1"));
    partArrows.push(document.querySelector(".js-arrow-1-2"));
    partArrows.push(document.querySelector(".js-arrow-1-3"));
    partArrows.push(document.querySelector(".js-arrow-1-4"));
    partArrows.push(document.querySelector(".js-arrow-1-5"));
    partArrows.push(document.querySelector(".js-arrow-1-6"));
    this.arrows.push(partArrows);
    partArrows = [];
    partArrows.push(document.querySelector(".js-arrow-2-0"));
    partArrows.push(document.querySelector(".js-arrow-2-1"));
    partArrows.push(document.querySelector(".js-arrow-2-2"));
    partArrows.push(document.querySelector(".js-arrow-2-3"));
    partArrows.push(document.querySelector(".js-arrow-2-4"));
    partArrows.push(document.querySelector(".js-arrow-2-5"));
    partArrows.push(document.querySelector(".js-arrow-2-6"));
    this.arrows.push(partArrows);
    partArrows = [];
    partArrows.push(document.querySelector(".js-arrow-3-0"));
    partArrows.push(document.querySelector(".js-arrow-3-1"));
    partArrows.push(document.querySelector(".js-arrow-3-2"));
    partArrows.push(document.querySelector(".js-arrow-3-3"));
    partArrows.push(document.querySelector(".js-arrow-3-4"));
    partArrows.push(document.querySelector(".js-arrow-3-5"));
    partArrows.push(document.querySelector(".js-arrow-3-6"));
    this.arrows.push(partArrows);
    partArrows = [];
    partArrows.push(document.querySelector(".js-arrow-4-0"));
    partArrows.push(document.querySelector(".js-arrow-4-1"));
    partArrows.push(document.querySelector(".js-arrow-4-2"));
    partArrows.push(document.querySelector(".js-arrow-4-3"));
    partArrows.push(document.querySelector(".js-arrow-4-4"));
    partArrows.push(document.querySelector(".js-arrow-4-5"));
    partArrows.push(document.querySelector(".js-arrow-4-6"));
    this.arrows.push(partArrows);

    // 숫자들
    this.numbers = [];
    let partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-0-0"));
    partNumbers.push(document.querySelector(".js-number-0-1"));
    partNumbers.push(document.querySelector(".js-number-0-2"));
    partNumbers.push(document.querySelector(".js-number-0-3"));
    partNumbers.push(document.querySelector(".js-number-0-4"));
    partNumbers.push(document.querySelector(".js-number-0-5"));
    partNumbers.push(document.querySelector(".js-number-0-6"));
    partNumbers.push(document.querySelector(".js-number-0-7"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-1-0"));
    partNumbers.push(document.querySelector(".js-number-1-1"));
    partNumbers.push(document.querySelector(".js-number-1-2"));
    partNumbers.push(document.querySelector(".js-number-1-3"));
    partNumbers.push(document.querySelector(".js-number-1-4"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-2-0"));
    partNumbers.push(document.querySelector(".js-number-2-1"));
    partNumbers.push(document.querySelector(".js-number-2-2"));
    partNumbers.push(document.querySelector(".js-number-2-3"));
    partNumbers.push(document.querySelector(".js-number-2-4"));
    partNumbers.push(document.querySelector(".js-number-2-5"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-3-0"));
    partNumbers.push(document.querySelector(".js-number-3-1"));
    partNumbers.push(document.querySelector(".js-number-3-2"));
    partNumbers.push(document.querySelector(".js-number-3-3"));
    partNumbers.push(document.querySelector(".js-number-3-4"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-4-0"));
    partNumbers.push(document.querySelector(".js-number-4-1"));
    partNumbers.push(document.querySelector(".js-number-4-2"));
    partNumbers.push(document.querySelector(".js-number-4-3"));
    partNumbers.push(document.querySelector(".js-number-4-4"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-5-0"));
    partNumbers.push(document.querySelector(".js-number-5-1"));
    partNumbers.push(document.querySelector(".js-number-5-2"));
    partNumbers.push(document.querySelector(".js-number-5-3"));
    this.numbers.push(partNumbers);
    partNumbers = [];
    partNumbers.push(document.querySelector(".js-number-6-0"));
    partNumbers.push(document.querySelector(".js-number-6-1"));
    partNumbers.push(document.querySelector(".js-number-6-2"));
    partNumbers.push(document.querySelector(".js-number-6-3"));
    this.numbers.push(partNumbers);

    // 등급 텍스트들
    this.gradeTexts = [];
    let partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    partGradeTexts.push(document.querySelector(".js-grade-text-4-0"));
    partGradeTexts.push(document.querySelector(".js-grade-text-4-1"));
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);
    partGradeTexts = [];
    this.gradeTexts.push(partGradeTexts);

    // 추가 버튼
    this.addBtn = document.querySelector(".js-add-btn");

    // 이전 버튼
    this.beforeBtn = document.querySelector(".js-before-btn");
    this.beforeBtn2 = document.querySelector(".js-before-btn-2");

    // 모드 변경 버튼
    this.modeChangeBtn = document.querySelector(".js-mode-change-btn");
    this.modeChangeBtn2 = document.querySelector(".js-mode-change-btn-2");

    // 다음 버튼
    this.nextBtn = document.querySelector(".js-next-btn");
    this.nextBtn2 = document.querySelector(".js-next-btn-2");

    // 타입 변경 버튼
    this.typeChangeBtn = document.querySelector(".js-type-change-btn");

    // 모드 로컬 저장소
    this.MODE_LS = "mode";

    // 간격 값들
    this.gapValues = [
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
    this.gradeTextValues = [
      {
        bone: [45, 60],
      },
      {
        bone: [60, 75],
      },
    ];

    // 보여줄 데이터 갯수
    this.MAX_VIEW_DATA_COUNT = 5;
    this.viewDataStartIndex = 0;
    this.viewDataCount = this.MAX_VIEW_DATA_COUNT;

    // 시작 항목 인덱스
    this.START_ITEM_INDEX = 4; // year, month, day, bmi를 제외하기 위해서 추가함
  }

  // 남은 일수를 가져옴
  getRemainDay = (targetDate, nowDate) => {
    const elapsed = new Date(targetDate - nowDate);
    const secondsMs = Math.floor(elapsed / 1000);
    const minutesMs = Math.floor(secondsMs / 60);
    const hoursMs = Math.floor(minutesMs / 60);
    return Math.floor(hoursMs / 24);
  };

  // 남은 날짜 텍스트를 가져옴
  getRemainDateText = (targetDate, nowDate) => {
    let remainOnlyYear = targetDate.getFullYear() - nowDate.getFullYear();
    let remainOnlyMonth = targetDate.getMonth() - nowDate.getMonth();
    let remainOnlyDay = targetDate.getDate() - nowDate.getDate();
    const remainDay = this.getRemainDay(targetDate, nowDate);

    if (remainOnlyDay > 0) {
      remainOnlyMonth = remainOnlyMonth + 1;
      const beforeMonthDay = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth(),
        0
      ).getDate();
      remainOnlyDay = remainOnlyDay - beforeMonthDay;
    }
    if (remainOnlyMonth > 0) {
      remainOnlyYear = remainOnlyYear + 1;
      remainOnlyMonth = remainOnlyMonth - 12;
    }

    let str = "";

    if (remainOnlyYear < 0) {
      str = str + `${remainOnlyYear * -1}년 `;
    }
    if (remainOnlyMonth < 0) {
      str = str + `${remainOnlyMonth * -1}달 `;
    }
    if (remainOnlyDay < 0) {
      str = str + `${remainOnlyDay * -1}일 `;
    }
    if (str != "") {
      str = str + `전`;
    } else {
      str = "오늘";
    }

    return str;
  };

  // 유저 기본 데이터를 보여줌
  showUserBaseData = () => {
    // 입력값을 모두 초기화함
    this.inputs.forEach((input) => {
      input.value = "";
    });

    // 현재 날짜와 시간을 입력값에 넣음
    const date = new Date();
    this.inputs[0].value = date.getFullYear();
    this.inputs[1].value = date.getMonth() + 1;
    this.inputs[2].value = date.getDate();

    // 유저 선택에 따라 숫자들에 간격 값들을 넣음
    if (this.userSelect.selectedIndex == 0) {
      this.numbers.forEach((partNumbers) => {
        partNumbers.forEach((partNumber) => {
          partNumber.textContent = "";
        });
      });

      this.gradeTexts.forEach((partGradeTexts) => {
        partGradeTexts.forEach((partGradeText) => {
          partGradeText.textContent = "";
        });
      });
    } else {
      this.numbers[0].forEach((number, index) => {
        const weight =
          this.gapValues[this.userSelect.selectedIndex - 1].weight[index];
        number.textContent =
          weight + ` (${this.getBmi(this.userHeight, weight)})`;
      });
      this.numbers[1].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].bodyFat[index];
      });
      this.numbers[2].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].water[index];
      });
      this.numbers[3].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].muscle[index];
      });
      this.numbers[4].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].bone[index];
      });
      this.numbers[5].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].visceralFat[index];
      });
      this.numbers[6].forEach((number, index) => {
        number.textContent =
          this.gapValues[this.userSelect.selectedIndex - 1].calorie[index];
      });

      this.gradeTexts[4].forEach((gradeText, index) => {
        gradeText.textContent =
          this.gradeTextValues[this.userSelect.selectedIndex - 1].bone[index] +
          "kg 미만이면, 건강";
      });
    }

    // 로컬 저장소에서 모드의 값을 가져와서 적용함
    const viewMode = localStorage.getItem(this.MODE_LS);
    if (viewMode !== null) this.viewDataCount = viewMode;
    this.modeChangeBtn.value = `${this.viewDataCount}개씩`;
    this.modeChangeBtn2.value = `${this.viewDataCount}개씩`;
  };

  // 히스토리를 추가함
  addHistory = () => {
    // 유저를 선택하지 않았다면, 끝냄
    if (this.userSelect.selectedIndex == 0) return;

    // 모든 값을 입력하지 않았다면, 알림을 출력하고 끝냄
    let isEmpty = false;
    this.inputs.forEach((input) => {
      if (input.value == "") isEmpty = true;
    });
    if (isEmpty == true) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    let parsedSaveDatas = []; // 분석한 저장 데이터들
    let isData = false; // 데이터 유무

    // 로컬 저장소에서 해당 유저의 값을 가져와서 있으면, 변경할지 여부를 확인하고, 없으면 저장함
    const saveDatas = localStorage.getItem(this.userSelect.selectedIndex);

    if (saveDatas !== null) {
      parsedSaveDatas = JSON.parse(saveDatas);

      parsedSaveDatas.forEach((saveData) => {
        if (
          saveData[0] == this.inputs[0].value &&
          saveData[1] == this.inputs[1].value &&
          saveData[2] == this.inputs[2].value
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
          parsedSaveDatas[i][0] == this.inputs[0].value &&
          parsedSaveDatas[i][1] == this.inputs[1].value &&
          parsedSaveDatas[i][2] == this.inputs[2].value
        )
          parsedSaveDatas.splice(i, 1);
      }

      const values = [];
      this.inputs.forEach((input) => {
        values.push(input.value);
      });
      parsedSaveDatas.push(values);
    }

    parsedSaveDatas.sort((a, b) => {
      if (parseInt(a[0]) < parseInt(b[0])) return -1;
      else if (parseInt(a[0]) > parseInt(b[0])) return 1;
      else {
        if (parseInt(a[1]) < parseInt(b[1])) return -1;
        else if (parseInt(a[1]) > parseInt(b[1])) return 1;
        else {
          if (parseInt(a[2]) < parseInt(b[2])) return -1;
          else if (parseInt(a[2]) > parseInt(b[2])) return 1;
          else return 0;
        }
      }
    });

    localStorage.setItem(
      this.userSelect.selectedIndex,
      JSON.stringify(parsedSaveDatas)
    );
  };

  // 히스토리를 보여줌
  showHistory = () => {
    this.arrows.forEach((partArrows) => {
      partArrows.forEach((partArrow) => {
        partArrow.textContent = "";
      });
    });

    let parsedSaveDatas = [];

    const saveDatas = localStorage.getItem(this.userSelect.selectedIndex);

    if (saveDatas !== null) {
      parsedSaveDatas = JSON.parse(saveDatas);

      parsedSaveDatas.reverse();

      const date = new Date();
      const nowDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      parsedSaveDatas.forEach((saveData, dayIndex) => {
        dayIndex -= this.viewDataStartIndex;

        const targetDate = new Date(saveData[0], saveData[1] - 1, saveData[2]);
        const remainDay = this.getRemainDay(targetDate, nowDate);

        saveData.forEach((saveDataValue, itemIndex) => {
          itemIndex -= this.START_ITEM_INDEX;

          const viewCount = this.getViewCount(parsedSaveDatas.length);

          if (
            0 <= dayIndex &&
            dayIndex < this.viewDataCount &&
            0 <= itemIndex
          ) {
            let targetGapValues;

            if (itemIndex == 0)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].weight;
            else if (itemIndex == 1)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].bodyFat;
            else if (itemIndex == 2)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].water;
            else if (itemIndex == 3)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].muscle;
            else if (itemIndex == 4)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].bone;
            else if (itemIndex == 5)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].visceralFat;
            else if (itemIndex == 6)
              targetGapValues =
                this.gapValues[this.userSelect.selectedIndex - 1].calorie;

            let minIndex = 0;
            let minValue = 0;

            const maxValue = targetGapValues.find((value, index) => {
              if (index == 0) return false;

              minIndex = index - 1;
              minValue = targetGapValues[minIndex];

              if (targetGapValues.length - 1 == index) return true;

              return saveDataValue < value;
            });

            if (
              itemIndex == 0 ||
              itemIndex == 1 ||
              itemIndex == 2 ||
              itemIndex == 3 ||
              itemIndex == 4
            )
              this.arrows[dayIndex][itemIndex].textContent =
                "🥕" + parseFloat(saveDataValue).toFixed(1);
            else
              this.arrows[dayIndex][itemIndex].textContent =
                "🥕" + saveDataValue;

            if (itemIndex == 0) {
              const bmi = this.getBmi(this.userHeight, saveDataValue);
              this.arrows[dayIndex][itemIndex].textContent += `kg / ${bmi} BMI`;
            } else if (itemIndex == 1 || itemIndex == 2 || itemIndex == 3)
              this.arrows[dayIndex][itemIndex].textContent += "%";
            else if (itemIndex == 4)
              this.arrows[dayIndex][itemIndex].textContent += "kg";
            else if (itemIndex == 6)
              this.arrows[dayIndex][itemIndex].textContent += " KCAL";

            if (remainDay == 0)
              this.arrows[dayIndex][itemIndex].textContent += "(오늘)";
            else
              this.arrows[dayIndex][itemIndex].textContent += `(D${remainDay})`;
            this.arrows[dayIndex][itemIndex].style.top =
              String(40 + (viewCount - 1 - dayIndex) * 15) + "px";

            if (dayIndex == 0)
              this.arrows[dayIndex][itemIndex].style.backgroundColor = "pink";
            else
              this.arrows[dayIndex][itemIndex].style.backgroundColor =
                "#F1FE2D";

            this.arrows[dayIndex][itemIndex].style.fontSize =
              String(20 - dayIndex * 4) + "px";
            this.arrows[dayIndex][itemIndex].style.fontWeight = "30px";

            const oneSize = 1 / (targetGapValues.length - 1);

            if (minValue == "-")
              //this.arrows[dayIndex][itemIndex].style.left = String(oneSize * 0.5 * 100) + "%";
              this.arrows[dayIndex][itemIndex].style.left = "0%";
            else if (maxValue == "+")
              //this.arrows[dayIndex][itemIndex].style.left = String(100 - oneSize * 0.5 * 100) + "%";
              this.arrows[dayIndex][itemIndex].style.left = "100%";
            else {
              const startPoint = oneSize * minIndex;

              const x = saveDataValue - minValue;
              const y = maxValue - minValue;

              if (minIndex == 0 && saveDataValue <= minValue)
                this.arrows[dayIndex][itemIndex].style.left = "0%";
              else if (
                minIndex == targetGapValues.length - 2 &&
                saveDataValue >= maxValue
              )
                this.arrows[dayIndex][itemIndex].style.left = "100%";
              else {
                const result = oneSize * (x / y);

                this.arrows[dayIndex][itemIndex].style.left =
                  String((startPoint + result) * 100) + "%";
              }
            }
          }
        });
      });
    }

    this.showHistoryForChart();
  };

  // 차트를 위한 히스토리를 보여줌
  showHistoryForChart = () => {
    if (this.userSelect.selectedIndex == 0) {
      worldWeightChart.change([], [], [], [], []);
      koreaWeightChart.change([], [], [], [], []);
      return;
    }

    let parsedSaveDatas = [];

    const saveDatas = localStorage.getItem(this.userSelect.selectedIndex);

    if (saveDatas !== null) {
      parsedSaveDatas = JSON.parse(saveDatas);

      parsedSaveDatas.reverse();

      const date = new Date();
      const nowDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      const weightLabels = [];
      const weightValues = [];
      const weightKgs = [];
      const worldWeightGradeValues = [0, 18.5, 25, 30, 35, 40, 45];
      const worldWeightGradeKgs = [];
      const koreaWeightGradeValues = [0, 18.5, 23, 25, 30, 35, 45];
      const koreaWeightGradeKgs = [];

      worldWeightGradeValues.forEach((weightGradeValue) => {
        worldWeightGradeKgs.push(this.getKg(this.userHeight, weightGradeValue));
      });
      koreaWeightGradeValues.forEach((weightGradeValue) => {
        koreaWeightGradeKgs.push(this.getKg(this.userHeight, weightGradeValue));
      });

      parsedSaveDatas.forEach((saveData, dayIndex) => {
        dayIndex -= this.viewDataStartIndex;

        const targetDate = new Date(saveData[0], saveData[1] - 1, saveData[2]);
        const remainDay = this.getRemainDay(targetDate, nowDate);

        saveData.forEach((saveDataValue, itemIndex) => {
          itemIndex -= this.START_ITEM_INDEX;

          const viewCount = this.getViewCount(parsedSaveDatas.length);

          if (
            0 <= dayIndex &&
            dayIndex < this.viewDataCount &&
            0 <= itemIndex
          ) {
            if (itemIndex == 0) {
              if (remainDay == 0) weightLabels.unshift("오늘");
              else
                weightLabels.unshift(
                  this.getRemainDateText(targetDate, nowDate)
                );

              const bmi = this.getBmi(this.userHeight, saveDataValue);
              weightValues.unshift(bmi);
              weightKgs.unshift(saveDataValue);
            }
          }
        });
      });

      worldWeightChart.change(
        weightLabels,
        weightValues,
        weightKgs,
        worldWeightGradeValues,
        worldWeightGradeKgs
      );
      koreaWeightChart.change(
        weightLabels,
        weightValues,
        weightKgs,
        koreaWeightGradeValues,
        koreaWeightGradeKgs
      );
    }
  };

  // 보여줄 갯수를 가져옴
  getViewCount = (dataLength) => {
    const result = dataLength - this.viewDataStartIndex;

    if (this.viewDataCount <= result) return this.viewDataCount;
    else return result;
  };

  // BMI를 가져옴
  getBmi = (height, weight) => {
    const h = height / 100; // cm 단위를 m 단위로 변경함
    const bmi = weight / (h * h);
    return bmi.toFixed(1);
  };

  // 몸무게을 가져옴
  getKg = (height, bmi) => {
    const h = height / 100; // cm 단위를 m 단위로 변경함
    const kg = bmi * (h * h);
    return kg.toFixed(1);
  };

  // 유저를 변경함
  handleChangeUser = () => {
    if (this.userSelectOptions[1].selected === true) {
      this.initUser(40, 155);
    } else if (this.userSelectOptions[2].selected === true) {
      this.initUser(39, 180);
    }

    if (this.userSelect.selectedIndex == 0) this.userBaseData.textContent = "";
    else
      this.userBaseData.textContent = `나이 : ${this.userAge} / 키 : ${this.userHeight}`;

    this.showUserBaseData();
    this.showHistory();
  };

  // 유저를 초기화함
  initUser = (age, height) => {
    this.userAge = age;
    this.userHeight = height;
  };

  // 유저를 체크함
  handleCheckUser = (event) => {
    event.preventDefault();

    if (this.userSelect.selectedIndex == 0) {
      alert("사용자를 선택해주세요.");
      return;
    }
  };

  // 추가 버튼을 누름
  handleAddBtn = (event) => {
    event.preventDefault();

    this.handleCheckUser(event);

    this.addHistory();
    this.showHistory();
  };

  // 이전 버튼을 누름
  handleBeforeBtn = (event) => {
    event.preventDefault();

    if (this.userSelect.selectedIndex == 0) return;

    const saveDatas = localStorage.getItem(this.userSelect.selectedIndex);

    if (saveDatas !== null) {
      const parsedSaveDatas = JSON.parse(saveDatas);

      this.viewDataStartIndex++;

      if (this.viewDataStartIndex == parsedSaveDatas.length) {
        this.viewDataStartIndex = parsedSaveDatas.length - 1;
      }
      this.showHistory();
    }
  };

  // 모드 변경 버튼을 누름
  handleModeChangeBtn = (event) => {
    event.preventDefault();

    this.viewDataCount++;

    if (this.MAX_VIEW_DATA_COUNT < this.viewDataCount) {
      this.viewDataCount = 1;
    }

    localStorage.setItem(this.MODE_LS, this.viewDataCount);
    this.modeChangeBtn.value = `${this.viewDataCount}개씩`;
    this.modeChangeBtn2.value = `${this.viewDataCount}개씩`;

    this.showHistory();
  };

  // 다음 버튼을 누름
  handleNextBtn = (event) => {
    event.preventDefault();

    if (this.userSelect.selectedIndex == 0) return;

    const saveDatas = localStorage.getItem(this.userSelect.selectedIndex);

    if (saveDatas !== null) {
      const parsedSaveDatas = JSON.parse(saveDatas);

      this.viewDataStartIndex--;

      if (this.viewDataStartIndex < 0) {
        this.viewDataStartIndex = 0;
      }
      this.showHistory();
    }
  };

  // 타입 변경 버튼을 누름
  handleTypeChangeBtn = (event) => {
    event.preventDefault();

    this.bars1.classList.toggle("js-hide-bars");
    this.bars2.classList.toggle("js-hide-bars");

    if (this.bars1.classList.contains("js-hide-bars"))
      this.typeChangeBtn.value = "🥕";
    else this.typeChangeBtn.value = "📊";
  };

  // 초기화함
  init = () => {
    this.showUserBaseData();

    this.userSelect.addEventListener("change", this.handleChangeUser);
    this.inputs.forEach((input) => {
      input.addEventListener("click", this.handleCheckUser);
    });
    this.addBtn.addEventListener("click", this.handleAddBtn);
    this.beforeBtn.addEventListener("click", this.handleBeforeBtn);
    this.beforeBtn2.addEventListener("click", this.handleBeforeBtn);
    this.modeChangeBtn.addEventListener("click", this.handleModeChangeBtn);
    this.modeChangeBtn2.addEventListener("click", this.handleModeChangeBtn);
    this.nextBtn.addEventListener("click", this.handleNextBtn);
    this.nextBtn2.addEventListener("click", this.handleNextBtn);

    this.typeChangeBtn.addEventListener("click", this.handleTypeChangeBtn);
  };
}
