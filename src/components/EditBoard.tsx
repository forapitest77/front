import { useContext, useState } from "react";
import { context, data } from "../assets/types";
import { MyContext } from "../App";
import {
  handleChange,
  onEdiTBoardSubmit,
  onInputChange,
} from "../functions/functions";
export default function EditBoard() {
  const context: context = useContext(MyContext);
  const [colums, setColums] = useState<string[]>(context.selectedColum.columns);
  const [data, setData] = useState<data>({
    name: context.selectedColum.name,
  });
  return (
    <div
      className={` fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm`}
    >
      <form
        onSubmit={(e) => {
         onEdiTBoardSubmit(e, data, colums, context);
        }}
        className={`rounded-2xl bg-${
          context.color == "dark" ? "gray-600 text-white" : "white"
        }  p-2 flex flex-col gap-1 relative`}
      >
        <label className={`pt-2`}>title</label>
        <input
          maxLength={15}
          minLength={3}
          name="name"
          onChange={(e) => {
            onInputChange(e, setData);
          }}
          value={data.name}
          type="text"
          className={`rounded-md border  border-gray-500 ${
            context.color == "dark" && "bg-gray-600"
          }`}
          placeholder="edit name"
          required
        />
        <h2 className="pt-2">colums</h2>
        {colums.map((item: string, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <input
              maxLength={15}
              minLength={3}
              required
              type="text"
              placeholder="enter colum"
              className={`${
                context.color == "dark" && "bg-gray-600"
              } border-2  rounded-md border-gray-500 w-full`}
              value={`${item}`}
              onChange={(e) =>
                handleChange(e.target.value, index, colums, setColums)
              }
            />
            <i
              onClick={() => {
                const newarr = colums.filter((i: string, j: number) => {
                  
                  return index !== j;
                });
                {
                  colums.length > 1 && setColums(newarr);
                }
              }}
              className="fa-solid fa-x cursor-pointer"
            ></i>
          </div>
        ))}
        <i
          className={`cursor-pointer fa-solid fa-x absolute right-2 top-2 text-${
            context.color == "dark" ? "white" : "black"
          }`}
          onClick={() => {
            context.setEditBoard(false);
          }}
        ></i>
        <button
          onClick={(e) => {
            e.preventDefault();
            setColums([...colums, ""]);
          }}
          className={`m-auto text-purple-600 w-11/12 bg-${
            context.color == "dark" ? "white" : "gray-300"
          } p-2.5 rounded-3xl`}
        >
          {`+ Add ${colums.length > 0 ? "New" : ""} column`}
        </button>
        <button type="submit" className="bg-blue-700 p-2 rounded-3xl">
          Save
        </button>
      </form>
    </div>
  );
}
