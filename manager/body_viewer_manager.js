// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_manager.js)

class BodyViewerManager {
  constructor(document, worldWeightChart, koreaWeightChart) {
    this.baseManager = new BaseManager();

    // 차트
    this.worldWeightChart = worldWeightChart;
    this.koreaWeightChart = koreaWeightChart;

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
    this.START_ITEM_INDEX = 4; // year, month, day, bmi를 제외하기 위해서 추가함
  }

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
    this.typeChangeBtn1.addEventListener("click", this.handleTypeChangeBtn1);
    this.typeChangeBtn2.addEventListener("click", this.handleTypeChangeBtn2);
  };
}
