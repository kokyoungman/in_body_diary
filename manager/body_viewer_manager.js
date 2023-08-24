// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_manager.js)

class BodyViewerManager {
  constructor() {
    this.baseManager = new BaseManager();

    // 차트
    this.bodyViewerChart1 = new BodyViewerChart("#js-chart-1");
    this.bodyViewerChart2 = new BodyViewerChart("#js-chart-2");
    this.bodyViewerChart3 = new BodyViewerChart("#js-chart-3");
    this.bodyViewerChart4 = new BodyViewerChart("#js-chart-4");
    this.bodyViewerChart5 = new BodyViewerChart("#js-chart-5");
    this.bodyViewerChart6 = new BodyViewerChart("#js-chart-6");

    // 유저
    this.userHeight;
    this.userInseam;

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

    // 뷰들
    this.views = document.querySelectorAll(".js-views");

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
      this.hideViews();
      return;
    }

    let parsedSaveDatas = [];

    const saveDatas = localStorage.getItem(
      this.DATAS_LS + this.userSelect.selectedIndex
    );

    if (saveDatas !== null) {
      parsedSaveDatas = JSON.parse(saveDatas);
      parsedSaveDatas.reverse();

      if (this.viewDataStartIndex < 0) {
        this.viewDataStartIndex = 0;
      } else if (parsedSaveDatas.length <= this.viewDataStartIndex) {
        this.viewDataStartIndex = parsedSaveDatas.length - 1;
      }

      const date = new Date();
      const nowDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      const labels = [];
      const weightValues = [];
      const chestValues = [];
      const chestInches = [];
      const waistValues = [];
      const waistInches = [];
      const hipsValues = [];
      const hipsInches = [];
      const upperArmValues = [];
      const upperArmInches = [];
      const thighValues = [];
      const thighInches = [];

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
              if (remainDay == 0) labels.unshift("오늘");
              else
                labels.unshift(
                  this.baseManager.getRemainDateText(targetDate, nowDate)
                );

              weightValues.unshift(parsedSaveDataValue);
            } else if (itemIndex == 1) {
              chestValues.unshift(parsedSaveDataValue);
              chestInches.unshift(
                this.baseManager.getInch(parsedSaveDataValue)
              );
            } else if (itemIndex == 2) {
              waistValues.unshift(parsedSaveDataValue);
              waistInches.unshift(
                this.baseManager.getInch(parsedSaveDataValue)
              );
            } else if (itemIndex == 3) {
              hipsValues.unshift(parsedSaveDataValue);
              hipsInches.unshift(this.baseManager.getInch(parsedSaveDataValue));
            } else if (itemIndex == 4) {
              upperArmValues.unshift(parsedSaveDataValue);
              upperArmInches.unshift(
                this.baseManager.getInch(parsedSaveDataValue)
              );
            } else if (itemIndex == 5) {
              thighValues.unshift(parsedSaveDataValue);
              thighInches.unshift(
                this.baseManager.getInch(parsedSaveDataValue)
              );
            }
          }
        });
      });

      if (
        weightValues.length > 0 &&
        chestValues.length > 0 &&
        waistValues.length > 0 &&
        hipsValues.length > 0
      ) {
        this.bodyViewerChart1.change("몸무게", 500, 160, labels, weightValues);
        this.bodyViewerChart2.change(
          "가슴 둘레",
          500,
          160,
          labels,
          chestValues,
          chestInches
        );
        this.bodyViewerChart3.change(
          "허리 둘레",
          500,
          160,
          labels,
          waistValues,
          waistInches
        );
        this.bodyViewerChart4.change(
          "엉덩이 둘레",
          500,
          160,
          labels,
          hipsValues,
          hipsInches
        );
        this.bodyViewerChart5.change(
          "위 팔 둘레",
          250,
          160,
          labels,
          upperArmValues,
          upperArmInches
        );
        this.bodyViewerChart6.change(
          "허벅지 둘레",
          250,
          160,
          labels,
          thighValues,
          thighInches
        );
        this.showBodyModel(
          weightValues[weightValues.length - 1],
          chestValues[chestValues.length - 1],
          waistValues[waistValues.length - 1],
          hipsValues[hipsValues.length - 1]
        );
        this.showViews();
      } else {
        this.hideViews();
      }
    } else {
      this.hideViews();
    }
  };

  // 유저를 변경함
  handleChangeUser = () => {
    if (this.userSelectOptions[1].selected === true) {
      this.initUser(155, 69.1);
    } else if (this.userSelectOptions[2].selected === true) {
      this.initUser(180, 82);
    }

    if (this.userSelect.selectedIndex == 0) this.userBaseData.textContent = "";
    else this.userBaseData.textContent = `키 : ${this.userHeight}`;

    this.showUserBaseData();
    this.showHistory();

    if (this.userSelectOptions[1].selected === true) {
      this.setFemaleModel();
    } else if (this.userSelectOptions[2].selected === true) {
      this.setMaleModel();
    }
  };

  // 유저를 초기화함
  initUser = (height, inseam) => {
    this.userHeight = height;
    this.userInseam = inseam;
  };

  // 유저를 체크함
  handleCheckUser = (event) => {
    event.preventDefault();

    if (this.userSelect.selectedIndex == 0) {
      alert("사용자를 선택해주세요.");
      return;
    }
  };

  // 뷰들을 보여줌
  showViews = () => {
    this.views.forEach((view) => {
      view.classList.remove("js-hide");
    });
  };

  // 뷰들을 숨김
  hideViews = () => {
    this.views.forEach((view) => {
      view.classList.add("js-hide");
    });
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

      if (parsedSaveDatas.length <= this.viewDataStartIndex) {
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

  // 바디 뷰어 관련
  setMaleModel = () => {
    setMale();
  };
  setFemaleModel = () => {
    setFemale();
  };
  showBodyModel = (weight, chest, waist, hips) => {
    setBody(this.userHeight, weight, chest, waist, hips, this.userInseam, 0);
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
