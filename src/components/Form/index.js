import "./index.scss";
import { useState } from "react";
import { RiToggleLine, RiToggleFill } from "react-icons/ri";
import { BiCommentAdd } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate user input
    const validate = [];
    if (description === "") {
      validate.push("Please enter the task name.");
    } else {
      // push task to tasks and display on page
      dispatch(addTask({ description, completed }));

      // clear input fields
      setDescription("");
      setCompleted(false);
      navigate("/");
    }
    setErrorMessages(validate);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Create</h2>
      <p>New Task</p>
      <div className="newTask">
        {/* conditional render error messages */}
        {errorMessages.length > 0 && (
          <div className="error">
            {errorMessages.map((item, index) => (
              <p key={index}>
                <CiCircleAlert />
                {item}
              </p>
            ))}
          </div>
        )}
        <div>
          <label>
            <h3>Task Name</h3>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <h3>Mark as Completed</h3>
            <input
              className="cb"
              type="checkbox"
              checked={completed}
              onChange={(e) => {
                setCompleted(e.target.checked);
              }}
            />
            <span className={completed ? "tgCompleted" : "null"}>
              {completed ? <RiToggleFill /> : <RiToggleLine />}
            </span>
          </label>
        </div>
        <button>
          <BiCommentAdd />
          Add
        </button>
      </div>
    </form>
  );
}
