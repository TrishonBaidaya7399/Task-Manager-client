// import PropTypes from 'prop-types';
import Modal from "../UI/Modal";
// import { RxCross2 } from "react-icons/rx";

const ShowDetails = ({ isOpen, setIsOpen, task }) => {
  // const onCancel = ()=>{
  //   setIsOpen(false)
  // }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Title: ${task.title}`}>
      {task && (
        <div key={task.id} className="rounded-md p-5">
          {/* <button onClick={onCancel} className="cursor text-end text-red-500 text-xl fixed top-2 right-2"><RxCross2 /></button> */}
          <h1>
            Priority:
            <span
              className={`text-lg font-semibold mb-3  ${
                task.priority === "high" ? "text-red-500" : ""
              } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
                task.priority === "low" ? "text-green-500" : ""
              }`}
            >
              {task?.priority}
            </span>
          </h1>
          <p className="text-sm">Assigned to: {task?.assignedTo}</p>
          <p>Dead Line: {task?.deadLine}</p>
          <textarea readOnly defaultValue={task?.description} className="mb-3 w-full bg-white/70 mt-3 p-2 rounded-md text-black h-[300px] overflow-auto"/>
          <div className="flex justify-between mt-3"></div>
        </div>
      )}
    </Modal>
  );
};

ShowDetails.propTypes = {};

export default ShowDetails;
