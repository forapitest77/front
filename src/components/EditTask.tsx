import { MyContext } from "../App";
import { context, data } from "../assets/types";
import { useContext, useState } from "react";
import { handleChange, onEdiTDAtaSubmit, onInputChange } from "../functions/functions";
export default function EditTask() {
  const context: context = useContext(MyContext);
  const [subtask, setSubTask] = useState<string[]>(context.task.subTasks);
  const [data, setData] = useState<data>({
    title: context.task.title,
    boardId: context.selectedBoardId,
    description: context.task.description,
    status: context.task.status,
  });
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <form
        onSubmit={(e) => {
         onEdiTDAtaSubmit(e, data, subtask, context);
        }}
        className={`bg-${
          context.color == "dark" ? "gray-600 text-white" : "white"
        } w-1/3 gap-1 relative flex flex-col p-4 rounded-md`}
      >
        <i
          className="cursor-pointer fa-solid fa-x absolute right-2 top-2"
          onClick={() => {
            context.setEditingTask(false);
          }}
        ></i>
        <label className={`pt-2`}>title</label>
        <input
          maxLength={15}
          minLength={3}
          name="title"
          value={data.title}
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          type="text"
          className={`rounded-md border ${
            context.color == "dark" && "bg-gray-600"
          }  border-gray-500`}
          placeholder="enter task title"
          required
        />
        <label className="pt-2">description</label>
        <textarea
          maxLength={100}
          name="description"
          value={data.description}
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          required
          placeholder="enter description"
          className={`${
            context.color == "dark" && "bg-gray-600"
          } h-20 rounded-md border  border-gray-500 outline-none`}
        />
        {subtask.length > 0 && <label className="pt-2">Subtasks</label>}
        {subtask.map((item: string, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <input
              required
              type="text"
              placeholder="enter Subtask"
              className={`${
                context.color == "dark" && "bg-gray-600"
              } border rounded-md border-gray-500 w-full`}
              value={item}
              onChange={(e) =>
                handleChange(e.target.value, index, subtask, setSubTask)
              }
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
          className={`bg-${
            context.color == "dark" ? "white" : "gray-300"
          } text-purple-600 w-11/12  p-2.5 rounded-3xl m-auto`}
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
            context.color == "dark" && "bg-gray-600"
          } rounded-md border  border-gray-500`}
        >
          {context.selectedColum.columns.map((colum: string) => (
            <>
              {context.task.status == colum ? (
                <option key={colum} selected value={colum}>
                  {colum}
                </option>
              ) : (
                <option key={colum} value={colum}>
                  {colum}
                </option>
              )}
            </>
          ))}
        </select>
        <button
          type="submit"
          className="w-11/12 bg-blue-700 p-3 m-auto rounded-3xl text-white"
        >
          Save Task
        </button>
      </form>
    </div>
  );
}
