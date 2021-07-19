const btnRandom = document.getElementById("btn-random");
const btnTask = document.getElementById("btn-task");

const randomEle = document.getElementById("random");
const taskEle = document.getElementById("task");

btnRandom.addEventListener("click", function () {
  randomEle.innerHTML = "Random: " + Math.random();
});

btnTask.addEventListener("click", function () {
  worker.postMessage("do work!");
  worker.onmessage((e) => {
    taskEle.innerHTML = "Heavy work result: " + e.data;
  });
});
