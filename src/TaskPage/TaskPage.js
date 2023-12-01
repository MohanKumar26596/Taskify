import React, { useState } from "react";
import "./TaskPage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const initialValues = {
    title: "",
    pic: "",
    description: "",
  };

  const handleAddTask = (values, { resetForm }) => {
    const { title, pic, description } = values;
    if (title && pic && description) {
      const newTask = {
        id: tasks.length + 1,
        title,
        pic,
        description,
      };
      setTasks([...tasks, newTask]);
      resetForm();
    }
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

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="task-Page">
      <div className="task-InputCard">
        <Formik initialValues={initialValues} onSubmit={handleAddTask}>
          {({ values, handleChange, handleBlur }) => (
            <Form className="task-Form">
              <div className="task-Inputs">
                <div className="pic-Box">
                  <label htmlFor="pic" className="label">
                    Add Pic:
                  </label>
                  {/* Display selected image */}
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      // style={{ maxWidth: "200px",maxHeight: "200px" }}
                      className="input-Pic"
                    />
                  )}
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
              <div className="addTaskBtn-Box">
                <button type="submit" className="addTask-Btn">
                  Add Task
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* RENDER TASK CARD */}

      <div className="task-ListCard">
        <button onClick={handleDeleteAllTasks} className="deleteAll-Btn">
          Delete All Tasks
        </button>
        {tasks.map((task) => (
          <div key={task.id} className="task-Board">
            <input type="checkbox" className="check-Box" />
            <span className="task-Name">{task.title}</span>
            <button onClick={() => handleEditTask(task)} className="edit-Task">
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="delete-Task"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
