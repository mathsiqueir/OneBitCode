// todo list {id,title,content,createAt, updateAt}
const taskModel = {
  getAlltasks() {
    return tasks;
  },
  getTaskById(id) {
    return tasks.find((task) => task.id === id);
  },

  createTask(title, content) {
    const task = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return task;
  },

  saveTask(task) {
    tasks.unshift(task);
  },

  updateTask(id, updatedtask) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index] = { ...tasks[index], ...updatedtask, updatedtask: new Date() };
  },

  deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
  },
};

module.exports = taskModel;
