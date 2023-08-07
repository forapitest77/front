import { MyContext } from "../App";
import Carousel from "react-multi-carousel";
import { getData } from "../zustand";
import { useEffect, useContext } from "react";
import randomColor from "randomcolor";
import { context, item } from "../assets/types";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../functions/functions";
export default function TasksData() {
  
  const context: context = useContext(MyContext);
  const { tasksData, boardsData, boards, tasks } = getData();
  useEffect(() => {
    tasks();
    boards();
  }, []);
  const result = boardsData.find(
    (item: item) => item.name == context.selectedBoard
  );
  return (
    <div
      className={`duration-1000 ${
        context.color == "dark" && "bg-slate-950"
      } p-4 flex overflow-auto justify-center items-center gap-10 h-[85vh] w-full`}
    >
      {context.selectedBoard == "" && (
        <button
          onClick={() => {
            context.setAddingBoard(true);
          }}
          className="w-44 h-12 bg-purple-500 rounded-3xl text-white"
        >
          + Add New board
        </button>
      )}
      {context.selectedBoard !== "" && (
        <Carousel
          centerMode
          responsive={responsive}
          className="flex justify-between items-start h-full w-full "
        >
          {result.columns.map((items: string) => {
            return (
              <div key={items} className="p-1 ">
                <div className="flex flex-col gap-2 text-gray-500 py-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: randomColor() }}
                  ></div>
                  {items}
                  <div className="flex flex-col gap-5">
                    {tasksData.map(
                      (item) =>
                        item.boardId == result.id &&
                        item.status == items && (
                          <div
                            key={item.id}
                            className={`duration-1000 bg-${
                              context.color == "dark"
                                ? "gray-700 text-white"
                                : "white"
                            } rounded-xl p-3 cursor-pointer shadow-lg flex justify-between`}
                          >
                            <h2
                              onClick={() => {
                                context.setViewTask(true);
                                context.setTask(item);
                              }}
                            >
                              {item.title}
                            </h2>
                            <div className="flex gap-1">
                              <i
                                onClick={() => {
                                  context.setTask(item);
                                  context.setEditingTask(true);
                                }}
                                className="fa-solid fa-pen-to-square"
                              ></i>
                              <i
                                onClick={() => {
                                  context.setDeleteTaskId(item.id);
                                }}
                                className="fa-solid fa-x text-red-600"
                              ></i>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
