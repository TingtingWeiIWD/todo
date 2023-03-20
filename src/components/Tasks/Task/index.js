import "./index.scss";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeStatus, removeTask } from "../../../redux/taskSlice";

export default function Task({ id, description, status }) {
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    console.log(id);
    dispatch(changeStatus(id));
  };
  const handleRemoveTask = (event) => {
    dispatch(removeTask(id));
  };
  return (
    <div className="task"> 
      {/* task contents */}
      <div>
        Status: {(status === "completed") ? 'Completed'
                : (status === "waiting") ? 'Waiting For Approval'
                : 'Open'}
      </div>
      
        
      <h3>{description}</h3>
      <p className="id"># {id}</p>

      {/* Buttons */}
      {/* <button onClick={handleChangeStatus}>Change Status</button> */}
      <button onClick={handleChangeStatus}>
        <RiExchangeBoxLine />
        Change Status
        </button>
      <button onClick={handleRemoveTask}>
        <FiTrash2 />
        Remove Task
      </button>
    </div>
  );
}
