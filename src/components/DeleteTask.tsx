import { MyContext } from "../App";
import { context } from "../assets/types";
import { useContext } from "react";
import { onDeleteSubmit } from "../functions/functions";
export default function DeleteTask() {
  const context: context = useContext(MyContext);
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <div
        className={`bg-${
          context.color == "dark" ? "gray-600" : "white"
        } p-1 rounded-2xl`}
      >
        <h2 className="text-2xl">are you sure to want delete this task?</h2>
        <div className="flex border-2  justify-end py-2 gap-4">
          <button
            onClick={() => {
               onDeleteSubmit(context.deleteTaskId, "tasks");
            }}
            className=" border-2 p-2 rounded-md border-red-500"
          >
            delete
          </button>
          <button
            onClick={() => {
              context.setDeleteTaskId("");
            }}
            className="border-blue-600 p-2 border-2 rounded-md"
          >
            cansel
          </button>
        </div>
      </div>
    </div>
  );
}
