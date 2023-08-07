import { create } from "zustand";
import { axiosinstance } from "./functions/functions";

type Store = {
  boardsData: any;
  tasksData: any[];
  boards: () => void;
  tasks: () => void;
};

export const getData = create<Store>()((set) => ({
  boardsData: [],
  tasksData:[],
  boards: async () => {
    const data = (await axiosinstance.get("boards")).data;
    set(() => ({
      boardsData: [...data],
    }));
  },
  tasks: async () => {
    const data = (await axiosinstance.get("tasks")).data;
    set(() => ({
      tasksData: [...data],
    }));
  },
}));

