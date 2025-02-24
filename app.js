import {
  displayAll,
  displayOnlyDone,
  displayOnlyInProgress,
} from "./funcs/render.js";
import {
  readTask,
  addTask,
  deleteTask,
  markDone,
  markInProgress,
} from "./funcs/task.js";
import process from "process";
const args = process.argv.slice(2);
async function main() {
  try {
    const method = args[0];
    let newTask;
    const id = args[1];
    switch (method) {
      case "add":
        const descripton = args[1];
        if (!descripton) throw Error("No descripton provided");
        newTask = await addTask(descripton);
        console.log("------------------------------");
        console.log(`Added new task : ${newTask.description}`);
        console.log("------------------------------");
        break;
      case "delete":
        if (!id) throw Error("No id provided");
        newTask = await deleteTask(id);
        console.log("------------------------------");
        console.log(`Deleted task : ${newTask.deleted.description}`);
        console.log("------------------------------");
        break;
      case "mark":
        const status = args[2];
        if (!status) throw Error("No status provided");
        if (status === "done") {
          const marked = await markDone(id);
          console.log("------------------------------");
          console.log(`Marked ${marked.description} to ${marked.status}`);
          console.log("------------------------------");
        }
        if (status === "in-progress") {
          const marked = await markInProgress(id);
          console.log("------------------------------");
          console.log(`Marked ${marked.description} to ${marked.status}`);
          console.log("------------------------------");
        }
        break;
      case "list":
        const filter = args[1];
        switch (filter) {
          case "all":
            await displayAll();
            break;
          case undefined:
            await displayAll();
            break;
          case "done":
            await displayOnlyDone();
            break;
          case "in-progress":
            await displayOnlyInProgress();
            break;
        }

        break;
      default:
        console.log("------------------------------");
        console.log(`Invalid Command : ${method}`);
        console.log("------------------------------");
    }
  } catch (err) {
    console.log(err);
  }
}

async function run() {
  await main();
}

run();
