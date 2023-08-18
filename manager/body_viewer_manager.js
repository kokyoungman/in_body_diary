// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_manager.js)

class BodyViewerManager {
  constructor(document) {
    this.baseManager = new BaseManager();

    // 차트
    this.bodyViewerChart = new BodyViewerChart();

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
    this.MODE_LS = "body_viewer_mode";
    this.DATAS_LS = "body_viewer_datas_";

    // 보여줄 데이터 갯수
    this.MAX_VIEW_DATA_COUNT = 5;
    this.viewDataStartIndex = 0;
    this.viewDataCount = this.MAX_VIEW_DATA_COUNT;

    // 시작 항목 인덱스
    this.START_ITEM_INDEX = 3; // year, month, day를 제외하기 위해서 추가함
  }

  // 유저 기본 데이터를 보여줌
  showUserBaseData = () => {
    // 입력값들을 보여줌
    this.baseManager.showInputs(this.inputs);

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
    if (this.baseManager.isInputs(this.inputs) == false) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    // 데이터들을 저장함
    this.baseManager.saveDatas(
      this.DATAS_LS + this.userSelect.selectedIndex,
      this.inputs
    );
  };

  // 히스토리를 보여줌
  showHistory = () => {
    if (this.userSelect.selectedIndex == 0) {
      this.bodyViewerChart.change([], [], [], [], [], [], []);
      return;
    }

    let parsedSaveDatas = [];

    const saveDatas = localStorage.getItem(
      this.DATAS_LS + this.userSelect.selectedIndex
    );

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
      const chestValues = [];
      const waistValues = [];
      const hipsValues = [];
      const upperArmValues = [];
      const thighValues = [];

      parsedSaveDatas.forEach((parsedSaveData, dayIndex) => {
        dayIndex -= this.viewDataStartIndex;

        const targetDate = new Date(
          parsedSaveData[0],
          parsedSaveData[1] - 1,
          parsedSaveData[2]
        );
        const remainDay = this.baseManager.getRemainDay(targetDate, nowDate);

        parsedSaveData.forEach((parsedSaveDataValue, itemIndex) => {
          itemIndex -= this.START_ITEM_INDEX;

          const viewCount = this.baseManager.getViewCount(
            parsedSaveDatas.length,
            this.viewDataStartIndex,
            this.viewDataCount
          );

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

              weightValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 1) {
              chestValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 2) {
              waistValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 3) {
              hipsValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 4) {
              upperArmValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 5) {
              thighValues.unshift(parsedSaveDataValue);
            }
          }
        });
      });

      this.bodyViewerChart.change(
        weightLabels,
        weightValues,
        chestValues,
        waistValues,
        hipsValues,
        upperArmValues,
        thighValues
      );
    }
  };

  // 유저를 변경함
  handleChangeUser = () => {
    if (this.userSelectOptions[1].selected === true) {
      this.initUser(155);
    } else if (this.userSelectOptions[2].selected === true) {
      this.initUser(180);
    }

    if (this.userSelect.selectedIndex == 0) this.userBaseData.textContent = "";
    else this.userBaseData.textContent = `키 : ${this.userHeight}`;

    this.showUserBaseData();
    this.showHistory();
  };

  // 유저를 초기화함
  initUser = (height) => {
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

    const saveDatas = localStorage.getItem(
      this.DATAS_LS + this.userSelect.selectedIndex
    );

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

    const saveDatas = localStorage.getItem(
      this.DATAS_LS + this.userSelect.selectedIndex
    );

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
    this.showHistory();

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
