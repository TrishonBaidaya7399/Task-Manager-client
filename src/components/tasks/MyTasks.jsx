import { useSelector } from "react-redux";
import MyTaskCard from "./MyTaskCard";

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
  const { userTasks } = useSelector((state) => state.users);
  console.log(userTasks);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className="max-h-[70vh] overflow-auto">
        {userTasks?.map((item) => (
          <MyTaskCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
