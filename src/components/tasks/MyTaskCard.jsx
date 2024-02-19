// import PropTypes from 'prop-types';
import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';
import { updateStatus } from '../../redux/features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
const MyTaskCard = ({item}) => {
    const dispatch = useDispatch()
    const handleUpdateStatus = (e)=>{
        e.preventDefault();
        dispatch(updateStatus({ id: item.id, status: "done" }))
      }
    return (
        <div key={item.id} className="mb-2 overflow-auto space-y-3">
        <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={handleUpdateStatus} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    );
};

MyTaskCard.propTypes = {
    
};

export default MyTaskCard;