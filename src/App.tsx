import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TasksData from "./components/TasksData";
import AddBoard from "./components/AddBoard";
import ViewTask from "./components/ViewTask";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";
import DeleteBoard from "./components/DeleteBoard";
import EditBoard from "./components/EditBoard";
export const MyContext = React.createContext<any>(null);
export default function App() {
  const [isSelected, setIsSelected] = useState(true);
  const [addingBoard, setAddingBoard] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [viewTask, setViewTask] = useState(false);
  const [selectedBoardId, setSelectedBoardId] = useState("");
  const [task, setTask] = useState({});
  const [deleteTaskId, setDeleteTaskId] = useState("");
  const [editingTask, setEditingTask] = useState(false);
  const [selectedColum, setSelectedColum] = useState([]);
  const [editBoard, setEditBoard] = useState(false);
  const [addTask, setAddtask] = useState(false);
  const [deleteBoard, setDeleteBoard] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const defaultColor = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  const currentColor = () => {
    const current = localStorage.getItem("color");
    return current || defaultColor;
  };
  const [color, setColor] = useState(currentColor());
  useEffect(() => {
    localStorage.setItem("color", color);
    setIsSelected(color == "dark" ? false : true);
  }, [color]);
  return (
    <MyContext.Provider
      value={{
        navVisible,
        viewTask,
        selectedColum,
        setSelectedColum,
        setViewTask,
        isSelected,
        color,
        setColor,
        selectedBoard,
        setSelectedBoard,
        addingBoard,
        setAddingBoard,
        selectedBoardId,
        setSelectedBoardId,
        task,
        setTask,
        setAddtask,
        setEditingTask,
        setDeleteTaskId,
        deleteTaskId,
        deleteBoard,
        setDeleteBoard,
        setEditBoard,
        editBoard,
        setNavVisible,
      }}
    >
      <Header />
      <div className="flex">
        <Navigation />
        <TasksData />
      </div>
      {addingBoard && <AddBoard />}
      {viewTask && <ViewTask />}
      {addTask && <AddTask />}
      {editingTask && <EditTask />}
      {deleteTaskId !== "" && <DeleteTask />}
      {deleteBoard && <DeleteBoard />}
      {editBoard && <EditBoard />}
    </MyContext.Provider>
  );
}
