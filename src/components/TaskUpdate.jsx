function TaskUpdate(state, action) {
  switch (action.type) {
    case "input":
      return { ...state, initialInput: action.payload };
    case "add":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: state.initialInput,
            isChecked: false,
            isEditClicked: true,
            buttonText: "Edit",
          },
        ],
        initialInput: "",
      };
    case "edit":
      return {
        ...state,
        tasks: state.tasks.map((editTask, index) => {
          if (index === action.payload) {
            return {
              ...editTask,
              isEditClicked: !editTask.isEditClicked,
              buttonText: "Edit",
            };
          } else {
            return editTask;
          }
        }),
      };
    case "edit-task":
      return {
        ...state,
        tasks: state.tasks.map((currentTask, index) => {
          if (action.payload.index === index) {
            return {
              ...currentTask,
              text: action.payload.value,
              buttonText: "Save",
            };
          } else {
            return currentTask;
          }
        }),
      };
    case "delete":
        const tempTasks = [...state.tasks]; 
        tempTasks.splice(action.payload, 1);
        return {
          ...state,
          tasks: tempTasks
        };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload) {
            return { ...task, isChecked: !task.isChecked };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
}
export default TaskUpdate;
