const task1 = (cb) =>
  setTimeout(() => {
    const message = "Task 1 has executed successfully!";
    cb(message);
  }, 3000);

const task2 = (cb) =>
  setTimeout(() => {
    const message = "Task 2 has executed successfully!";
    cb(message);
  }, 0);

const task3 = (cb) =>
  setTimeout(() => {
    const message = "Task 3 has executed successfully!";
    cb(message);
  }, 1000);

const task4 = (cb) =>
  setTimeout(() => {
    const message = "Task 4 has executed successfully!";
    cb(message);
  }, 2000);

const task5 = (cb) =>
  setTimeout(() => {
    const message = "Task 5 has executed successfully!";
    cb(message);
  }, 4000);

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = (tasks, callback) => {
  const messages = [];

  tasks.forEach((task) => {
    task((message) => {
      const res = callback(message);
      messages.push(res);
    });
  });

  setTimeout(() => {
    console.log(messages);
  }, 10000);
};

const printMessages = (message) => {
  //console.log(message);
  return message;
};

executeInSequenceWithCBs(asyncTasks, printMessages);
