var largeCount = 0;
var mediumCount = 0;
var smallCount = 0;

function updateWaitCount() {
  var totalCount=0;
  var totalWaitTime=0;
  
  if (largeCount < 0) {
    largeCount = 0;
  } 

  if (mediumCount < 0) {
    mediumCount = 0;
  } 

  if (smallCount < 0) {
    smallCount = 0;
  } 
  var largeWaitTime = largeCount * 30;
  var mediumWaitTime = mediumCount * 20;
  var smallWaitTime = smallCount * 10;
  if ((largeCount + mediumCount + smallCount) < 0) {
    totalCount = 0;
    totalWaitTime = 0;
  } else {
    totalCount = largeCount + mediumCount + smallCount;
    totalWaitTime = largeWaitTime + mediumWaitTime  + smallWaitTime;
  }
  document.getElementById("large").textContent = "等待車數(大車)：" + largeCount;
  document.getElementById("medium").textContent = "等待車數(中車)：" + mediumCount;
  document.getElementById("small").textContent = "等待車數(廠車)：" + smallCount;
  document.getElementById("wait-count").textContent = "目前等待車數：" + totalCount;
  document.getElementById("wait-time").textContent = "預估等待時間：" + totalWaitTime + " 分鐘";
}

function increaseCount(type) {
  if (type === "large") {
    largeCount++;
  } else if (type === "medium") {
    mediumCount++;
  } else if (type === "small") {
    smallCount++;
  }

  updateWaitCount();
}

function decreaseCount(type) {
  if (type === "large") {
    largeCount--;
  } else if (type === "medium") {
    mediumCount--;
  } else if (type === "small") {
    smallCount--;
  }

  updateWaitCount();
}

// 初始化等待车数和等待时间
updateWaitCount();
