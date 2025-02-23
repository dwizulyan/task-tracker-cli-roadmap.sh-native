import path from "path";
import { readFile, writeFile } from "fs/promises";
const encoding = "utf-8";
export class Task {
  async read(filter) {
    try {
      const tasks = JSON.parse(
        await readFile(path.join("../tasks.json"), {
          encoding: encoding,
        })
      );
      console.log(tasks);
      if (!filter) {
        return tasks;
      }
      if (filter === "done") {
        return tasks.filter((data) => data.status === "done");
      }
      if (filter === "in-progress") {
        return tasks.filter((data) => data.status === "in-progress");
      }
    } catch (err) {
      throw err;
    }
  }
  async add(description) {
    try {
      const tasks = await this.read();
      const newTask = {
        id: tasks.length,
        description: description,
        status: "todo",
        createdAt: new Date().toLocaleString(),
        updatedAt: "n/a",
      };
      tasks.push(newTask);
      await writeFile("../tasks.json", JSON.stringify(tasks));
      return newTask;
    } catch (err) {
      return err;
    }
  }
  async delete(id) {
    try {
      const tasks = await this.read();
      const deletedTask = tasks.filter((data) => data.id !== id);
      await writeFile("../tasks.json", JSON.stringify(deletedTask));
      return id;
    } catch (err) {
      return err;
    }
  }
  async markInProgress(id) {
    {
      try {
        const tasks = this.read();
        let modified;
        for (let x = 0; x < tasks.length; x++) {
          if (tasks[x].id == id) {
            tasks[x].status = "in-progress";
            tasks[x].updatedAt = new Date().toLocaleString();
            modified = tasks[x];
          }
        }
        await writeFileS("../tasks.json", JSON.stringify(tasks));
        return modified;
      } catch (err) {
        throw err;
      }
    }
  }
  async markInDone(id) {
    {
      try {
        const tasks = this.read();
        let modified;
        for (let x = 0; x < tasks.length; x++) {
          if (tasks[x].id == id) {
            tasks[x].status = "done";
            tasks[x].updatedAt = new Date().toLocaleString();
            modified = tasks[x];
          }
        }
        await writeFile("../tasks.json", JSON.stringify(tasks));
        return modified;
      } catch (err) {
        throw err;
      }
    }
  }
}
