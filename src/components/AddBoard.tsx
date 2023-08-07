import { useContext, useState } from "react";
import { MyContext } from "../App";
import { handleChange, onAddboardSubmit } from "../functions/functions";
import { context } from "../assets/types";
export default function AddBoard() {
  const context: context = useContext(MyContext);
  const [column, setColum] = useState([""]);
  const [name, setName] = useState("");
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <form
        onSubmit={(e) => {
         onAddboardSubmit(e, name, column);
        }}
        className={`bg-${
          context.color == "dark" ? "gray-600" : "white"
        } w-96 relative gap-2 flex flex-col items-center p-4 rounded-2xl`}
      >
        <i
          onClick={() => {
            context.setAddingBoard(false);
          }}
          className={`${
            context.color == "dark" && "text-gray-400"
          } cursor-pointer fa-solid fa-x absolute right-2 top-2`}
        ></i>
        <div className="w-2/3 flex flex-col gap-2">
          <h2 className={`${context.color == "dark" && "text-white"}`}>
            Add New Board
          </h2>
          <input
            minLength={3}
            maxLength={15}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="enter name"
            className={`border-solid border  rounded-md border-gray-500 p-1 ${
              context.color == "dark" && "bg-gray-600 text-white"
            }`}
          />
          {column.length > 0 && (
            <h2 className={`${context.color == "dark" && "text-white"}`}>
              Columns
            </h2>
          )}
          {column.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <input
                minLength={3}
                maxLength={15}
                required
                type="text"
                placeholder="enter column"
                className={`${
                  context.color == "dark" && "bg-gray-600 text-white"
                } border-solid border-2  rounded-md border-gray-500 w-full p-1`}
                value={`${item}`}
                onChange={(e) => handleChange(e.target.value, index, column,setColum)}
              />
              <i
                onClick={() => {
                  const newarr = column.filter((i, j) => {
                    return index !== j;
                  });
                  {
                    column.length > 1 && setColum(newarr);
                  }
                }}
                className={`fa-solid fa-x cursor-pointer ${
                  context.color == "dark" && "text-gray-400"
                }`}
              ></i>
            </div>
          ))}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setColum([...column, ""]);
          }}
          className={`text-purple-600 w-2/3 bg-${
            context.color == "dark" ? "white" : "gray-300"
          } p-2.5 rounded-3xl`}
        >
          {`+ Add ${column.length > 0 ? "New" : ""} Column`}
        </button>
        <button className="text-white w-2/3 bg-blue-600 p-2.5 rounded-3xl">
          Create New Board
        </button>
      </form>
    </div>
  );
}
