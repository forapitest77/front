import { MyContext } from "../App";
import { context } from "../assets/types";
import { useContext } from "react";
import { onDeleteSubmit } from "../functions/functions";

export default function DeleteBoard() {
  const context: context = useContext(MyContext);
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <div
        className={`bg-${
          context.color == "dark" ? "gray-600 text-white" : "white"
        } p-1 rounded-2xl`}
      >
        <h2 className="text-2xl">are you sure to want delete this board?</h2>
        <div className="flex border-2  justify-end py-2 gap-4">
          <button
            onClick={() => {
              onDeleteSubmit(context.selectedColum.id, "boards");
            }}
            className=" border-2 p-2 rounded-md border-red-500"
          >
            delete
          </button>
          <button
            onClick={() => {
              context.setDeleteBoard(false);
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
