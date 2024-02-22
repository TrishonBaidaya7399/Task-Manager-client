import { useDispatch, useSelector } from "react-redux";
import MyTaskCard from "./MyTaskCard";
import { useEffect } from "react";
import { userTasks } from "../../redux/features/tasks/tasksSlice";

const MyTasks = () => {
  // const item = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasks);
  const { name: userName } = useSelector((state) => state.users);
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(userTasks(userName))
  },[dispatch, tasks, userName])
 console.log(userSpecificTasks);
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className="max-h-[70vh] overflow-auto">
        {userSpecificTasks?.map((item) => (
          <MyTaskCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
