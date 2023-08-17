// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_manager.js)

class BodyViewerManager {
  constructor(document) {
    this.baseManager = new BaseManager();

    // 차트
    this.weightChart = new BodyViewerChart();
    this.chestChart = new BodyViewerChart();
    this.waistChart = new BodyViewerChart();
    this.hipsChart = new BodyViewerChart();
    this.upperArmChart = new BodyViewerChart();
    this.thighChart = new BodyViewerChart();

    // 유저
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
    this.inputs.push(document.querySelector(".js-input-weight"));
    this.inputs.push(document.querySelector(".js-input-chest"));
    this.inputs.push(document.querySelector(".js-input-waist"));
    this.inputs.push(document.querySelector(".js-input-hips"));
    this.inputs.push(document.querySelector(".js-input-upper-arm"));
    this.inputs.push(document.querySelector(".js-input-thigh"));

    // 추가 버튼
    this.addBtn = document.querySelector(".js-add-btn");

    // 이전 버튼
    this.beforeBtn = document.querySelector(".js-before-btn");

    // 모드 변경 버튼
    this.modeChangeBtn = document.querySelector(".js-mode-change-btn");

    // 다음 버튼
    this.nextBtn = document.querySelector(".js-next-btn");

    // 타입 변경 버튼
    this.typeChangeBtn1 = document.querySelector(".js-type-change-btn-1");
    this.typeChangeBtn2 = document.querySelector(".js-type-change-btn-2");

    // 모드 로컬 저장소
    this.MODE_LS = "mode";

    // 보여줄 데이터 갯수
    this.MAX_VIEW_DATA_COUNT = 5;
    this.viewDataStartIndex = 0;
    this.viewDataCount = this.MAX_VIEW_DATA_COUNT;

    // 시작 항목 인덱스
    this.START_ITEM_INDEX = 3; // year, month, day를 제외하기 위해서 추가함
  }

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

    // 로컬 저장소에서 모드의 값을 가져와서 적용함
    const viewMode = localStorage.getItem(this.MODE_LS);
    if (viewMode !== null) this.viewDataCount = viewMode;
    this.modeChangeBtn.value = `${this.viewDataCount}개씩`;
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
        const remainDay = this.baseManager.getRemainDay(targetDate, nowDate);

        saveData.forEach((saveDataValue, itemIndex) => {});
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
        worldWeightGradeKgs.push(
          this.baseManager.getKg(this.userHeight, weightGradeValue)
        );
      });
      koreaWeightGradeValues.forEach((weightGradeValue) => {
        koreaWeightGradeKgs.push(
          this.baseManager.getKg(this.userHeight, weightGradeValue)
        );
      });

      parsedSaveDatas.forEach((saveData, dayIndex) => {
        dayIndex -= this.viewDataStartIndex;

        const targetDate = new Date(saveData[0], saveData[1] - 1, saveData[2]);
        const remainDay = this.baseManager.getRemainDay(targetDate, nowDate);

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
                  this.baseManager.getRemainDateText(targetDate, nowDate)
                );

              const bmi = this.baseManager.getBmi(
                this.userHeight,
                saveDataValue
              );
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
  handleTypeChangeBtn1 = (event) => {
    event.preventDefault();

    location.href = "./";
  };
  handleTypeChangeBtn2 = (event) => {
    event.preventDefault();
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
    this.modeChangeBtn.addEventListener("click", this.handleModeChangeBtn);
    this.nextBtn.addEventListener("click", this.handleNextBtn);

    this.typeChangeBtn1.addEventListener("click", this.handleTypeChangeBtn1);
    this.typeChangeBtn2.addEventListener("click", this.handleTypeChangeBtn2);
  };
}
