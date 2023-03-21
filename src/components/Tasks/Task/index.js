import "./index.scss";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeStatus, removeTask } from "../../../redux/taskSlice";
import { getStatus } from "../../../variables";

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

      <h3>{description}</h3>
      <p className="id"># {id}</p>

      <div className="statusContainer">
        <div>
          Status: <span className={getStatus(status)}>{getStatus(status)}</span>
        </div>
        <button onClick={handleChangeStatus}>
          <RiExchangeBoxLine />
          Change Status
        </button>
      </div>
      <button className="remove" onClick={handleRemoveTask}>
        <FiTrash2 />
        Remove Task
      </button>
    </div>
  );
}
