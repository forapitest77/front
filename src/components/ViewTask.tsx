import { useContext } from "react";
import { MyContext } from "../App";
import { context } from "../assets/types";

export default function ViewTask() {
  const context: context = useContext(MyContext);
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm ">
      <div className={`bg-${context.color=='dark'?'gray-600 text-white':'white'} p-5  relative flex flex-col gap-5 w-1/3 break-words text-center`}>
        <i
          onClick={() => {
            context.setViewTask(false);
          }}
          className="fa-solid fa-x absolute right-2 top-2 cursor-pointer"
        ></i>
        <div className="flex flex-col shadow-[inset_0_-2px_10px_rgba(0,0,0,0.6)] rounded-md p-1">
          <h2 className="text-4xl  underline decoration-dashed decoration-purple-700">
            title
          </h2>
          <h2 className="text-4xl">{context.task.title}</h2>
        </div>
        <div className="flex flex-col shadow-[inset_0_-2px_10px_rgba(0,0,0,0.6)] rounded-md p-1 ">
          <h2 className="text-4xl underline decoration-dashed decoration-purple-700">
            description
          </h2>
          <h2 className="text-4xl">{context.task.description}</h2>
        </div>
        {context.task.subTasks.map((subtask: string, index) => {
          return (
            <div className="shadow-[inset_0_-2px_10px_rgba(0,0,0,0.6)] rounded-md p-2 flex flex-col gap-2">
              <div className="text-gray-600 underline decoration-dashed decoration-purple-700">
                subtask-{index + 1}
              </div>
              <div key={subtask}>{subtask}</div>
            </div>
          );
        })}
        <h2 className="shadow-[inset_0_-2px_10px_rgba(0,0,0,0.6)] rounded-md p-1">
          status:{context.task.status}
        </h2>
      </div>
    </div>
  );
}
