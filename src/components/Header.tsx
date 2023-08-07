import { useContext, useState } from "react";
import { MyContext } from "../App";
import { context } from "../assets/types";
import headerImg from "../assets/images/Group 16.svg";
export default function Header() {
  const context: context = useContext(MyContext);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <header
      className={`p-2 duration-1000 bg-${
        context.color == "dark" ? "gray-900 text-white" : "white"
      } flex justify-right items-center h-[15vh] `}
    >
      <i
        onClick={() => {
          context.setNavVisible(!context.navVisible);
        }}
        className={`z-20 absolute top-2 ${
          context.navVisible && "rotate-180"
        } hidden  duration-1000 sm:flex cursor-pointer fa-solid fa-caret-down`}
      ></i>
      <div className=" sm:flex sm:justify-end w-5/6">
        <img src={headerImg} />
      </div>
      <div className="w-full h-full flex items-center justify-between p-8">
        <h2 className="text-2xl pr-2">{context.selectedBoard}</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              context.selectedBoard !== "" && context.setAddtask(true);
            }}
            className={`w-5 h-5 rounded-full sm:flex hidden justify-center ${
              context.selectedBoard == ""
                ? "cursor-no-drop  bg-slate-400"
                : "bg-blue-700"
            }  text-white`}
          >
            +
          </button>
          <button
            onClick={() => {
              context.selectedBoard !== "" && context.setAddtask(true);
            }}
            className={`p-2 ${
              context.selectedBoard == ""
                ? "cursor-no-drop  bg-slate-400 "
                : "bg-blue-700"
            }  rounded-3xl text-white  sm:hidden`}
          >
            + Add New Task
          </button>
          {context.selectedBoard !== "" && (
            <i
              onClick={() => {
                setShowEdit(!showEdit);
              }}
              className=" fa-solid fa-ellipsis-vertical cursor-pointer"
            ></i>
          )}
          {context.selectedBoard !== "" && showEdit && (
            <div className="flex flex-col gap-1">
              <button
                onClick={() => {
                  context.setEditBoard(true);
                }}
                className=" border-2 border-blue-600 p-1 rounded-xl"
              >
                edit board
              </button>
              <button
                onClick={() => {
                  context.setDeleteBoard(true);
                }}
                className=" border-2 border-red-600 p-1 rounded-xl"
              >
                delete board
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
