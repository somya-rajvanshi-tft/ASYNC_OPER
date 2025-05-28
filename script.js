const logEl = document.getElementById("log");

const log = (msg) => {
  console.log(msg);
  logEl.textContent += msg + '\n';
};


const tasks = [
  { id: 1, title: "Wash dishes", duration: 2000 },
  { id: 2, title: "Do laundry", duration: 3000 },
  { id: 3, title: "Write report", duration: 1500 },
  { id: 4, title: null, duration: "fast" } 
];


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function validateTask(task) {
  if (!task.title || typeof task.duration !== "number") {
    throw new Error(`Invalid task: ${JSON.stringify(task)}`);
  }
}


function runWithForLoop() {
  log("Running with FOR loop:");
  for (let i = 0; i < tasks.length; i++) {
    try {
      const task = tasks[i];
      validateTask(task);
      setTimeout(() => {
        log(`Task Started: ${task.title}`);
        setTimeout(() => {
          log(`Task Completed: ${task.title} after ${task.duration}ms`);
        }, task.duration);
      }, 0);
    } catch (err) {
      log(`Error: ${err.message}`);
    }
  }
}


function runWithForEach() {
  log("Running with forEach loop:");
  tasks.forEach(task => {
    try {
      validateTask(task);
      setTimeout(() => {
        log(`Task Started: ${task.title}`);
        setTimeout(() => {
          log(`Task Completed: ${task.title} after ${task.duration}ms`);
        }, task.duration);
      }, 0);
    } catch (err) {
      log(`Error: ${err.message}`);
    }
  });
}


async function runWithForOf() {
  log("Running with for...of loop:");
  for (const task of tasks) {
    try {
      validateTask(task);
      log(`Task Started: ${task.title}`);
      await delay(task.duration);
      log(`Task Completed: ${task.title} after ${task.duration}ms`);
    } catch (err) {
      log(`Error: ${err.message}`);
    }
  }
}


async function executeTasks() {
  log("Executing tasks using async/await:");
  for (const task of tasks) {
    try {
      validateTask(task);
      log(`Task Started: ${task.title}`);
      await delay(task.duration);
      log(`Task Completed: ${task.title} after ${task.duration}ms`);
    } catch (err) {
      log(`Error: ${err.message}`);
    }
  }
}
