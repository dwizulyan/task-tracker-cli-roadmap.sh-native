import { writeFile, readFile, stat } from "fs/promises";
import { deserialize } from "v8";

export async function readTask() {
  try {
    const tasks = await readFile("./tasks.json");
    return JSON.parse(tasks);
  } catch (err) {
    throw err;
  }
}

export async function addTask(description) {
  try {
    const tasks = await readTask();
    const newTasks = {
      id: tasks.length,
      description: description,
      status: "todo",
      createdAt: new Date().toLocaleString(),
      updatedAt: "n/a",
    };
    tasks.push(newTasks);
    await writeFile("./tasks.json", JSON.stringify(tasks));
    return newTasks;
  } catch (err) {
    throw err;
  }
}

export async function deleteTask(id) {
  try {
    const tasks = await readTask();
    let deleted;
    const newTasks = tasks
      .filter((data, index) => {
        if (data.id != id) {
          return data;
        } else {
          deleted = data;
        }
      })
      .map((data, index) => {
        return {
          id: index,
          description: data.description,
          status: data.status,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        };
      });
    await writeFile("./tasks.json", JSON.stringify(newTasks));
    return { newTasks, deleted };
  } catch (err) {
    throw err;
  }
}

export async function markDone(id) {
  try {
    const tasks = await readTask();
    let modified;
    const newTasks = tasks.map((data) => {
      if (data.id == id) {
        modified = {
          id: data.id,
          description: data.description,
          status: "done",
          createdAt: data.createdAt,
          updatedAt: new Date().toLocaleString(),
        };
        return modified;
      } else {
        return data;
      }
    });
    await writeFile("./tasks.json", JSON.stringify(newTasks));
    return modified;
  } catch (err) {
    throw err;
  }
}

export async function markInProgress(id) {
  try {
    const tasks = await readTask();
    let modified;
    const newTasks = tasks.map((data) => {
      if (data.id == id) {
        modified = {
          id: data.id,
          description: data.description,
          status: "in-progress",
          createdAt: data.createdAt,
          updatedAt: new Date().toLocaleString(),
        };
        return modified;
      } else {
        return data;
      }
    });
    await writeFile("./tasks.json", JSON.stringify(newTasks));
    return modified;
  } catch (err) {
    throw err;
  }
}
