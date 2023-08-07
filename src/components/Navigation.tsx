import { useContext, useState, useEffect } from "react";
import Shape from "../assets/images/Shape.svg";
import blueShape from "../assets/images/blue-Shape.svg";
import classnames from "classnames";
import { MyContext } from "../App";
import { getData } from "../zustand";
import { context, info } from "../assets/types";
export default function Navigation() {
  const context: context = useContext(MyContext);
  const [visible, setVisible] = useState(true);
  const { boardsData, boards } = getData();
  useEffect(() => {
    boards();
  }, []);
  return (
    <>
      <div
        className={`sm:w-full sm:top-0 sm:h-full sm:absolute sm:z-10 ${
          !context.navVisible && "sm:-translate-y-full sm:opacity-0"
        }   gap-4  duration-1000 text-gray-400 ${
          visible ? "w-4/12" : "absolute w-0 opacity-0"
        } ${
          context.color == "dark" ? "bg-gray-900" : "bg-white"
        } flex flex-col  items-center p-3 h-[85vh] justify-between`}
      >
        <div className=" sm:flex sm:items-center overflow-y-auto h-5/6 w-full flex flex-col gap-4 items-start">
          <h3 className="mx-6 ">ALL BOARDS ({boardsData.length})</h3>
          {boardsData.map((info: info) => {
            return (
              <div
                key={info.name}
                onClick={() => {
                  context.setSelectedColum(info);
                  context.setNavVisible(!context.navVisible);
                  context.setSelectedBoardId(
                    context.selectedBoardId !== info.id ? info.id : ""
                  );
                  context.setSelectedBoard(
                    context.selectedBoard !== info.name ? info.name : ""
                  );
                }}
                className={`${
                  context.selectedBoard == info.name && "bg-blue-600"
                } cursor-pointer flex items-center  pl-7 gap-3 w-11/12  py-4 rounded-r-3xl`}
              >
                <img src={Shape} />
                {info.name}
              </div>
            );
          })}

          <div
            onClick={() => {
              context.setAddingBoard(true);
            }}
            className="sm:justify-center flex cursor-pointer items-center  pl-7 gap-3 w-11/12 text-purple-600 py-4 rounded-r-3xl"
          >
            <img src={blueShape} />+ Create New Board
          </div>
        </div>
        <div className={`h-1/12 duration-500 ${!visible && "opacity-0"} `}>
          <div
            className={`flex w-20 h-10  m-10 rounded-full transition-all duration-500 ${
              context.isSelected ? "bg-yellow-500" : "bg-blue-800"
            }`}
          >
            <span
              onClick={() => {
                context.setColor(context.color == "dark" ? "light" : "dark");
              }}
              className={classnames(
                "cursor-pointer flex items-center justify-center h-10 w-10 bg-white rounded-full transition-all duration-500 shadow-lg",
                { "ml-10": context.isSelected }
              )}
            >
              <i
                className={`text-2xl ${
                  context.isSelected
                    ? "fa-solid fa-sun text-yellow-400"
                    : "fa-solid fa-moon text-blue-800"
                }`}
              ></i>
            </span>
          </div>
          <div
            className="sm:hidden flex items-center justify-around cursor-pointer"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <i className=" fa-regular fa-eye-slash"></i>hide side bar
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setVisible(!visible);
        }}
        className={`sm:hidden cursor-pointer w-10 h-10 rounded-r-3xl flex items-center justify-center bg-blue-700 absolute bottom-10 ${
          visible ? "hidden" : ""
        } `}
      >
        <i className="fa-solid fa-eye text-white"></i>
      </div>
    </>
  );
}
