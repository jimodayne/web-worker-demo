const btnRandom = document.getElementById("btn-random");
const btnTask = document.getElementById("btn-task");

const randomEle = document.getElementById("random");
const taskEle = document.getElementById("task");

btnRandom.addEventListener("click", () => {
  randomEle.innerHTML = "Random: " + Math.random();
});

btnTask.addEventListener("click", () => {
  const res = heavyWork();
  taskEle.innerHTML = "Heavy work result: " + res;
});

function heavyWork() {
  let final = 0;
  for (let i = 0; i < 10000000000; i++) {
    final += i;
  }
  return final;
}
