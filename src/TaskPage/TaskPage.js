import React, { useState } from "react";
import "./TaskPage.css";
import "./TaskListOut.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TaskifyLogo from "../Assessts/images/mainapplogo.png";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const initialValues = {
    title: "",
    pic: "",
    description: "",
  };

  const handleAddTask = (values) => {
    const { title, pic, description } = values;
    if (title && pic && description) {
      const newTask = {
        id: tasks.length + 1,
        title,
        pic,
        description,
      };
      setTasks([...tasks, newTask]);
      // if (resetForm) {
        //   resetForm();
        // }
      }
      console.log(values);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="task-Page">
      <div className="left-TaskPage">
        {/* APP LOGO CARD */}
        <div className="appLogo-Card">
          <img src={TaskifyLogo} alt="TaskifyLogo" className="appLogo" />
          <h1 className="appLogo-Name">TASKiFY</h1>
        </div>

        {/* ADD TASK INPUT CARD */}
        <div className="task-InputCard">
          <Formik
            initialValues={editTask || initialValues}
            onSubmit={(values, { resetForm }) => {
              handleAddTask(values);
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form className="task-Form">
                <h3 className="taskCard-Heading">Add your Task</h3>
                <div className="task-Inputs">
                  <div className="pic-Box">
                    <label htmlFor="pic" className="label">
                      Add Pic:
                    </label>
                    {/* Display selected image */}
                    <div className="input-Pic">
                      {selectedImage && (
                        <img
                          src={selectedImage}
                          alt="Selected"
                          style={{
                            maxWidth: "180px",
                            maxHeight: "180px",
                            backgroundColor: "#e3e9ff",
                          }}
                          placeholder="Add"
                        />
                      )}
                    </div>
                    <input
                      type="file"
                      id="pic"
                      name="pic"
                      onChange={handleImageChange}
                      className="choose-File"
                    />
                    <ErrorMessage name="pic" />
                  </div>

                  <div className="task-TextInputs">
                    <div className="task-titleBox">
                      <label htmlFor="title" className="label">
                        Title:
                      </label>
                      <Field
                        type="text"
                        name="title"
                        placeholder="Title"
                        values={Formik.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-Title"
                      />
                      <ErrorMessage name="title" />
                    </div>

                    <div className="task-DescriptBox">
                      <label htmlFor="description" className="label">
                        Description:
                      </label>
                      <Field
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-Descript"
                      />
                      <ErrorMessage name="description" />
                    </div>
                  </div>
                </div>
                <div className="addTaskBtn-Box">
                  <button
                    type="submit"
                    className="addTask-Btn"
                    onSubmit={handleAddTask}
                  >
                    Add Task
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* RENDER TASK CARD */}

      <div className="right-TaskPage">
        {/* LOGOUT BUTTON CARD */}
        <div className="logout-Card">
          <div className="account-Name">My Taskify</div>
          <button className="logout-Btn">Logout</button>
        </div>
        {/* TASK LIST CARD  */}
        <div className="task-ListCard">
          <h3 className="taskListCard-Heading">Your Task Hub</h3>
          <div className="taskList-Board">
            {/* Render tasks from the 'tasks' state */}
            {tasks.map((task) => (
              <div key={task.id} className="task-List">
                <input type="checkbox" className="check-Box" />
                <span className="task-Name">{task.title}</span>
                <button
                  onClick={() => handleEditTask(task)}
                  className="edit-Task"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="deleteTask-Btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleDeleteAllTasks} className="deleteAll-Btn">
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
