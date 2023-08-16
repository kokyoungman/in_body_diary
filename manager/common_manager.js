// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (common_manager.js)

class CommonManager {
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
}
