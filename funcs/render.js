import { readTask } from "./task.js";

export async function displayAll() {
  try {
    const tasks = await readTask();
    console.log("------------------------------");
    console.log(`Currently there are ${tasks.length} tasks.`);
    console.log("------------------------------");
    tasks.map((data) => {
      console.log(`Id: ${data.id}`);
      console.log(`Description : ${data.description}`);
      console.log(`Status : ${data.status}`);
      console.log(`Created at : ${data.createdAt}`);
      console.log(`Updated at : ${data.updatedAt}`);
      console.log("------------------------------");
    });
  } catch (err) {
    throw err;
  }
}
export async function displayOnlyDone() {
  try {
    const tasks = await readTask();
    const filtered = tasks.filter((data) => {
      return data.status === "done";
    });
    if (filtered.length > 0) {
      console.log("------------------------------");
      console.log(`Displaying task that are marked done`);
      console.log("------------------------------");
      filtered.map((data) => {
        console.log(`Id: ${data.id}`);
        console.log(`Description : ${data.description}`);
        console.log(`Status : ${data.status}`);
        console.log(`Created at : ${data.createdAt}`);
        console.log(`Updated at : ${data.updatedAt}`);
        console.log("------------------------------");
      });
    } else {
      console.log("------------------------------");
      console.log(`No task that are marked done`);
      console.log("------------------------------");
    }
  } catch (err) {
    throw err;
  }
}

export async function displayOnlyInProgress() {
  try {
    const tasks = await readTask();
    const filtered = tasks.filter((data) => {
      return data.status === "in-progress";
    });
    if (filtered.length > 0) {
      console.log("------------------------------");
      console.log(`Displaying task that are marked in-progress`);
      console.log("------------------------------");
      filtered.map((data) => {
        console.log(`Id: ${data.id}`);
        console.log(`Description : ${data.description}`);
        console.log(`Status : ${data.status}`);
        console.log(`Created at : ${data.createdAt}`);
        console.log(`Updated at : ${data.updatedAt}`);
        console.log("------------------------------");
      });
    } else {
      console.log("------------------------------");
      console.log(`No task that are marked in-progress`);
      console.log("------------------------------");
    }
  } catch (err) {
    throw err;
  }
}
