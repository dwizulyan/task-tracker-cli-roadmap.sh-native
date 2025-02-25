# task-tracker-cli-roadmap.sh-native
project url : https://roadmap.sh/projects/task-tracker

App created for roadmap.sh challange, building task-tracker-cli.

This app has feature :

- Add new task
- Delete task
- mark task as `done`
- mark task as `in-progress`
- update task description
- list all task
- list all task that marked as `done`
- list all task that marked as `in-progress`

## Installation

```sh
git clone https://github.com/dwizulyan/task-tracker-cli-roadmap.sh-native.git
```

then

```sh
cd task-tracker-cli-roadmap.sh-native
```

## Commands

#### Adding new task

```sh
node app add [taskName]
```

Use quote if your task description have whitespaces

#### Updating new task

```sh
node app update [taskId] [taskNewDescription]
```

Use quote if your task description have whitespaces

#### Marking task

```sh
node app mark [taskId] [done | in-progress]
```

There are only 2 option for mark either `done` or `in-progress` other than that the app will produce an error.

#### Listing Task

```sh
node app list [done | in-progress | empty]
```

If you leave the filter empty, it will get all the tasks available

#### Deleting Task

```sh
node app delete [taskId]
```

# That's all 😄
