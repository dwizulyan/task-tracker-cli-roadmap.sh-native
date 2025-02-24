import { readTask, addTask, deleteTask } from "./funcs/task.js";
import process from "process";
const args = process.argv.slice(2);
async function main() {
  try {
    const method = args[0];
    let newTask;
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
        const id = args[1];
        if (!id) throw Error("No id provided");
        newTask = await deleteTask(id);
        console.log("------------------------------");
        console.log(`Deleted task : ${newTask.deleted.description}`);
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
