import "./index.scss";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { changeStatus, removeTask } from "../../../redux/taskSlice";

export default function Task({ id, description, completed }) {
  const dispatch = useDispatch();
  const handleChangeStatus = () => {
    dispatch(changeStatus(id));
  };
  const handleRemoveTask = (event) => {
    dispatch(removeTask(id));
  };
  return (
    <div className="task">
      {/* task contents */}
      <h3
        className={completed ? "completed-yes" : "completed-no"}
        onClick={handleChangeStatus}
      >
        {completed ? <BsCheckCircleFill /> : <BsCircle />}
        {description}
      </h3>
      <p className="id"># {id}</p>

      {/* Buttons */}
      {/* <button onClick={handleChangeStatus}>Change Status</button> */}
      <button onClick={handleRemoveTask}>
        <FiTrash2 />
        Remove Task
      </button>
    </div>
  );
}
