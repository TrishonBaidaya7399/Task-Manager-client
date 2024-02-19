// import PropTypes from 'prop-types';
import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';
import { updateStatus } from '../../redux/features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ShowDetails from './showDetails';


const MyTaskCard = ({item}) => {
    let [isOpen, setIsOpen] = useState(false);
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
              <DocumentMagnifyingGlassIcon onClick={() => setIsOpen(!isOpen)} className="w-5 h-5 text-primary" />
            </button>
            <button onClick={handleUpdateStatus} className="grid place-content-center" title="Done">
              <CheckIcon className={item.status !== "done" ? "w-5 h-5 text-primary" : "w-6 h-6 text-white bg-green-400 rounded-full p-1" } />
            </button>
            <ShowDetails task={item} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    );
};

MyTaskCard.propTypes = {
    
};

export default MyTaskCard;