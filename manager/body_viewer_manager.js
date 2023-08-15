// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (body_viewer_manager.js)

class BodyViewerManager {
  constructor(document) {
    // 타입 변경 버튼
    this.typeChangeBtn1 = document.querySelector(".js-type-change-btn-1");
    this.typeChangeBtn2 = document.querySelector(".js-type-change-btn-2");
    this.typeChangeBtn3 = document.querySelector(".js-type-change-btn-3");
  }

  // 타입 변경 버튼을 누름
  handleTypeChangeBtn1 = (event) => {
    event.preventDefault();

    location.href = "./";
  };
  handleTypeChangeBtn2 = (event) => {
    event.preventDefault();

    location.href = "./";
  };
  handleTypeChangeBtn3 = (event) => {
    event.preventDefault();
  };

  // 초기화함
  init = () => {
    this.typeChangeBtn1.addEventListener("click", this.handleTypeChangeBtn1);
    this.typeChangeBtn2.addEventListener("click", this.handleTypeChangeBtn2);
    this.typeChangeBtn3.addEventListener("click", this.handleTypeChangeBtn3);
  };
}
