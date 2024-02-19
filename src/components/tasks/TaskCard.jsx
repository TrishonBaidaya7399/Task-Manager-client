import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  removeTask,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  console.log(task);
  console.log(task.status);
  const dispatch = useDispatch();
  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }
  console.log(updatedStatus);
  const handleUpdateStatus = (e)=>{
    e.preventDefault();
    dispatch(updateStatus({ id: task.id, status: updatedStatus }))
  }
  return (
    <>
      {task ? (
        <div key={task.id} className="bg-secondary/10 rounded-md p-5">
          <h1
            className={`text-lg font-semibold mb-3  ${
              task.priority === "high" ? "text-red-500" : ""
            } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
              task.priority === "low" ? "text-green-500" : ""
            }`}
          >
            {task?.title}
          </h1>
          <p className="mb-3">{task?.description}</p>
          <p className="text-sm">Assigned to - {task?.assignedTo}</p>
          <div className="flex justify-between mt-3">
            <p>{task?.date}</p>
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(removeTask(task?.id))}
                title="Delete"
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
              </button>
              <button
                onClick={handleUpdateStatus}
                title="task status"
              >
                <ArrowRightIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>No Task Available.. Add a Task</h1>
      )}
    </>
  );
};

export default TaskCard;
