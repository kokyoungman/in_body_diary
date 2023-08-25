// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (base_manager.js)

class BaseManager {
  // 입력값들을 보여줌
  showInputs = (inputs) => {
    // 입력값을 모두 초기화함
    inputs.forEach((input) => {
      input.value = "";
    });

    // 현재 날짜와 시간을 입력값에 넣음
    const date = new Date();
    inputs[0].value = date.getFullYear();
    inputs[1].value = date.getMonth() + 1;
    inputs[2].value = date.getDate();
  };

  // 입력값들이 모두 있는지 여부를 가져옴
  isInputs = (inputs) => {
    inputs.forEach((input) => {
      if (input.value == "") return false;
    });

    return true;
  };

  // 데이터들을 저장함
  saveDatas = (key, inputs) => {
    let parsedSaveDatas = []; // 파싱한 저장 데이터들
    let isSameData = false; // 같은 날짜의 데이터가 있는지 여부

    // 로컬 저장소에서 해당 유저의 값을 가져와서 있으면, 변경할지 여부를 확인함
    const saveDatas = localStorage.getItem(key);

    if (saveDatas !== null) {
      parsedSaveDatas = JSON.parse(saveDatas);

      parsedSaveDatas.forEach((parsedSaveData) => {
        if (
          parsedSaveData[0] == inputs[0].value &&
          parsedSaveData[1] == inputs[1].value &&
          parsedSaveData[2] == inputs[2].value
        )
          isSameData = true;
      });
    }

    if (isSameData) {
      if (confirm("이미 같은 날짜의 값이 있습니다. 변경하시겠습니까?") == false)
        return;
    }

    // 같은 날짜의 데이터를 삭제함
    for (let i = parsedSaveDatas.length - 1; i >= 0; i--) {
      if (
        parsedSaveDatas[i][0] == inputs[0].value &&
        parsedSaveDatas[i][1] == inputs[1].value &&
        parsedSaveDatas[i][2] == inputs[2].value
      )
        parsedSaveDatas.splice(i, 1);
    }

    // 새 데이터들을 추가함
    const newDatas = [];

    inputs.forEach((input) => {
      newDatas.push(input.value);
    });

    parsedSaveDatas.push(newDatas);

    // 파싱한 저장 데이터들을 정렬함
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

    // 파싱한 데이터들을 저장함
    localStorage.setItem(key, JSON.stringify(parsedSaveDatas));
  };

  // 보여줄 갯수를 가져옴
  getViewCount = (dataLength, viewDataStartIndex, viewDataCount) => {
    const result = dataLength - viewDataStartIndex;

    if (viewDataCount <= result) {
      return viewDataCount;
    } else {
      return result;
    }
  };

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

  // 인치를 가져옴
  getInch = (cm) => {
    const inch = cm / 2.54;
    return inch.toFixed(1);
  };
}
