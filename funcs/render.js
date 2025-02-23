import { Task } from "./task.js";
const taskMethod = new Task();
export class Render {
  async all(msg) {
    try {
      const tasks = await taskMethod.read();
      console.log("------------------");
      console.log(msg ? msg : `There is ${tasks.length} tasks`);
      console.log("------------------");
      tasks.map((data) => {
        console.log(`Id : ${data.id}`);
        console.log(`Description : ${data.description}`);
        console.log(`Status : ${data.status}`);
        console.log(`Created at : ${data.createdAt}`);
        console.log(`Updated at: ${data.updatedAt}`);
        console.log("------------------");
      });
    } catch (err) {
      throw err;
    }
  }
  async filter(filter, msg) {
    try {
      const tasks = await taskMethod.read(filter);
      console.log("------------------");
      console.log(
        msg ? msg : `There is ${tasks.length} tasks with ${filter} status`
      );
      console.log("------------------");
      tasks.map((data) => {
        console.log(`Id : ${data.id}`);
        console.log(`Description : ${data.description}`);
        console.log(`Status : ${data.status}`);
        console.log(`Created at : ${data.createdAt}`);
        console.log(`Updated at: ${data.updatedAt}`);
        console.log("------------------");
      });
    } catch (err) {
      throw err;
    }
  }
}
