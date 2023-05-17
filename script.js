let largeCount = 0;
let mediumCount = 0;
let smallCount = 0;

function updateWaitCount() {
  const totalCount = largeCount + mediumCount + smallCount;
  document.getElementById("wait-count").textContent = "目前等待車數：" + totalCount;
}

function updateWaitTime() {
  totalWaitTime = 0
  largeWaitTime = largeCount * 30
  mediumWaitTime = mediumCount * 20
  smallWaitTime = smallCount * 10
  const totalWaitTime = largeWaitTime + mediumWaitTime  + smallWaitTime;
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
  updateWaitTime();
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
  updateWaitTime();
}

// 初始化等待车数和等待时间
updateWaitCount();
updateWaitTime();
