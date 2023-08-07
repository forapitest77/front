import { useContext, useState } from "react";
import { context, data } from "../assets/types";
import { MyContext } from "../App";
import {
  handleChange,
  onAddTaskSubmit,
  onInputChange,
} from "../functions/functions";
export default function AddTask() {
  const [subtask, setSubTask] = useState([""]);
  const context: context = useContext(MyContext);
  const [data, setData] = useState<data>({
    title: "",
    boardId: context.selectedBoardId,
    description: "",
    status: "",
  });

  return (
    <div className=" fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <form
        onSubmit={(e) => {
         onAddTaskSubmit(e,data,subtask)
        }}
        className={`bg-${
          context.color == "dark" ? "gray-600 text-white" : "white"
        } w-1/3 sm:w-2/3 gap-1 relative flex flex-col p-4 rounded-md`}
      >
        <h2 className="text-3xl py-2">Add New Task</h2>
        <i
          className="cursor-pointer fa-solid fa-x absolute right-2 top-2"
          onClick={() => {
            context.setAddtask(false);
          }}
        ></i>
        <label className="pt-2">
          title
        </label>
        <input
          minLength={3}
          maxLength={15}
          name="title"
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          type="text"
          className={`rounded-md border border-gray-500 ${
            context.color == "dark" && "bg-gray-600 text-white"
          }`}
          placeholder="enter task title"
          required
        />
        <label className="pt-2">description</label>
        <textarea
          minLength={10}
          name="description"
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          required
          placeholder="enter description"
          className={`h-20 rounded-md border outline-none  border-gray-500 ${
            context.color == "dark" && "bg-gray-600 text-white"
          } `}
        />
        {subtask.length > 0 && <label className="pt-2">Subtasks</label>}
        {subtask.map((item: string, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <input
              required
              min={3}
              max={15}
              type="text"
              placeholder="enter Subtask"
              className={`${
                context.color == "dark" && "bg-gray-600 text-white"
              } border-solid border  rounded-md border-gray-500 w-full`}
              value={`${item}`}
              onChange={(e) => handleChange(e.target.value, index,subtask,setSubTask)}
            />
            <i
              onClick={() => {
                const newarr = subtask.filter((i, j) => {
                
                  return index !== j;
                });
                setSubTask(newarr);
              }}
              className="fa-solid fa-x cursor-pointer"
            ></i>
          </div>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            setSubTask([...subtask, ""]);
          }}
          className="m-auto text-purple-600 w-11/12 bg-gray-300 p-2.5 rounded-3xl"
        >
          {`+ Add ${subtask.length > 0 ? "New" : ""} Subtask`}
        </button>
        <label className="pt-2">status</label>
        <select
          required
          name="status"
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          className={`${
            context.color == "dark" && "bg-gray-600 text-white"
          } rounded-md border outline-none  border-black`}
        >
          <option selected hidden></option>
          {context.selectedColum.columns.map((colum: string) => (
            <option key={colum} value={colum}>
              {colum}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-11/12 bg-blue-700 p-3 m-auto rounded-3xl text-white"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
