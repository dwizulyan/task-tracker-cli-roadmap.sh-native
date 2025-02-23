import { argv } from "process";

import { Task } from "./funcs/task.js";
import { Render } from "./funcs/render.js";

const taskMethod = new Task();
const render = new Render();

async function main() {
  const args = argv.slice(2);
  const method = args[0];

  switch (method) {
    case "add":
      try {
        const taskDescription = args[1];
        if (!taskDescription) {
          return new Error("No description provided");
        }
        await taskMethod.add(taskDescription);
        render.all("Added New Tasks!!");
        break;
      } catch (err) {
        console.log(err);
        break;
      }

    case "mark":
      try {
        const taskId = args[2];
        const status = args[1];
        if (!taskId) return new Error("No id provided");
        if (status === "in-progress") {
          const task = await taskMethod.markInProgress(taskId);
          render.all(`Marking ${task.description} status to ${task.status} `);
        } else if (status === "done") {
          const task = await taskMethod.markInDone(taskId);
          render.all(`Marking ${task.description} status to ${task.status} `);
          break;
        } else {
          return new Error("Invalid status");
        }
      } catch (err) {
        console.log(err);
        break;
      }
    case "list-all":
      try {
        render.all();
        break;
      } catch (err) {
        console.log(err);
        break;
      }
    case "list-filter":
      try {
        const filter = args[1];
        render.filter(filter);
        break;
      } catch (err) {
        console.log(err);
        break;
      }
    case "delete":
      try {
        const id = args[1];
        await taskMethod.delete(id);
        render.all(`Deleted task with id ${id}!!`);
        break;
      } catch (err) {
        console.log(err);
        break;
      }
  }
}

main();
