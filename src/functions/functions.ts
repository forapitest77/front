import axios from "axios";
import { context, data } from "../assets/types";
export const axiosinstance = axios.create({
  baseURL: "https://pink-jittery-bonobo.cyclic.app/api/",
});
export const handleChange = (
  value: string,
  index: number,
  data: any,
  setData: any
) => {
  const newcolumn = data.map((columItem: string, xolumIndex: number) => {
    return xolumIndex === index ? value : columItem;
  });
  setData(newcolumn);
};

export const onInputChange= (e: any,   setData:any) => {
  const { name, value } = e.target;
  setData((prev: any) => {
    return { ...prev, [name]: value };
  });
};

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1250 },
    items: 3,
  },
  smalldesktop: {
    breakpoint: { max: 1250, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export const onAddTaskSubmit = (e:any, data:data, subtask:string[]) => {
   e.preventDefault();
  data.subTasks = subtask;
  axiosinstance
    .post("tasks", data)
    .then(() => window.location.reload())
};

export const onAddboardSubmit = (e: any, name: string, column: string[]) => {
  e.preventDefault();
  const data = {
    name: name,
    columns: column,
  };
  axiosinstance.post("boards", data).then(() => window.location.reload());
};

export const onEdiTBoardSubmit=(e:any,data:data,colums:string[],context:context) => {
   e.preventDefault();
   data.columns = colums;
   axiosinstance
     .put(`boards/${context.selectedBoardId}`, data)
     .then(() => window.location.reload());
}

export const onEdiTDAtaSubmit=(e:any,data:data,subtask:string[],context:context) => {
   data.subTasks = subtask;
   e.preventDefault();
   axiosinstance
     .put(`tasks/${context.task.id}`, data)
     .then(() => window.location.reload());
}

export const onDeleteSubmit = (id:string,route:string) => {
   axiosinstance
     .delete(`${route}/${id}`)
     .then(() => window.location.reload());
}