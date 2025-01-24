import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ShowDetails from "./showDetails";
import {
  useRemoveTaskMutation,
  useUpdateStatusMutation,
} from "../../redux/api/taskApi/taskApi";
import { toast } from "react-toastify";

const TaskCard = ({ task }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  const [removeTask, { isLoading: isDeleting, error: removingError }] =
    useRemoveTaskMutation();
  const [updateStatus, { isLoading: isUpdatingStatus, error: updateError }] =
    useUpdateStatusMutation(0);
  let updatedStatus;
  useEffect(() => {
    if (isDeleting || isUpdatingStatus) {
      setIsLoading(true);
    }
  }, [isUpdatingStatus, isDeleting]);
  useEffect(() => {
    if (removingError) {
      setError(removingError);
    } else if (updateError) {
      setError(updateError);
    }
  }, [removingError, updateError]);
  if (task.status === "todo") {
    updatedStatus = "inprogress";
  } else if (task.status === "inprogress") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }
  const handleRemove = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!task?._id) {
      toast.error("Task ID is invalid");
      return;
    }

    try {
      await removeTask(task._id).unwrap();
      toast.success("Task removed successfully");
    } catch (error) {
      console.error("Failed to remove task:", error);
      toast.error(error?.data?.message || "Failed to remove task");
    }
  };

  // Handle Update Status
  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await updateStatus({ _id: task?._id, status: updatedStatus }).unwrap();
      toast.success("Task status updated successfully");
    } catch (error) {
      console.error("Failed to update status:", error);
      toast.error(error?.message);
    }
  };
  if (!isDeleting && error) {
    console.error(error);
  }
  return (
    <>
      {task ? (
        <div
          onClick={() => setIsOpen(!isOpen)}
          key={task.id}
          className="bg-secondary/10 rounded-md p-5"
        >
          <h1
            className={`text-lg font-semibold mb-3  ${
              task.priority === "high" ? "text-red-500" : ""
            } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
              task.priority === "low" ? "text-green-500" : ""
            }`}
          >
            {task?.title}
          </h1>
          <p className="mb-3 max-h-[200px] overflow-hidden border-b-2 border-blue-500">
            {task?.description}
          </p>
          <p className="text-sm">Assigned to - {task?.assignedTo}</p>
          <div className="flex justify-between mt-3">
            <p>{task?.date}</p>
            <div className="flex gap-3">
              <button
                onClick={handleRemove}
                disabled={isDeleting || isLoading}
                title={isDeleting ? "Deleting..." : "Delete"}
                className="cursor-pointer"
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
              </button>
              <button
                onClick={handleUpdateStatus}
                disabled={isUpdatingStatus || isLoading}
                title={isUpdatingStatus ? "Updating..." : "task status"}
                className="cursor-pointer"
              >
                <ArrowRightIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>No Task Available.. Add a Task</h1>
      )}
      <ShowDetails task={task} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TaskCard;
