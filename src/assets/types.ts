export type info = { name: string; columns: [string]; id: string };
export type context = {
  addingBoard: boolean;
  color: string;
  isSelected: boolean;
  selectedBoard: string;
  selectedBoardId: string;
  navVisible:boolean;
  setNavVisible(arg0: boolean): boolean;
  setAddingBoard: (arg0: boolean) => boolean;
  setColor: (arg0: string) => string;
  setSelectedBoard: (arg0: string) => string;
  setSelectedBoardId: (arg0: string) => string;
  setDeleteTaskId: (arg0: string) => string;
  setTask: (arg0: boolean) => boolean;
  setAddtask: (arg0: boolean) => boolean;
  setEditingTask: (arg0: boolean) => boolean;
  setViewTask: (arg0: boolean) => boolean;
  setDeleteBoard: (arg0: boolean) => boolean;
  setEditBoard: (arg0: boolean) => boolean;
  deleteTaskId: string;
  setSelectedColum: (arg0: { columns: [string]; id: string; name: string }) => {
    columns: [string];
    id: string;
    name: string;
  };
  selectedColum: {
    columns: [string];
    id: string;
    name: string;
  };
  task: {
    boardId: string;
    description: string;
    id: string;
    status: string;
    subTasks: [string, string];
    title: string;
  };
  viewTask: false;
};
export type data = {
  name?: string;
  columns?: string[];
  title?: string;
  boardId?: string;
  description?: string;
  subTasks?: any;
  status?: string;
};

export type item = { name: string; id: string };
