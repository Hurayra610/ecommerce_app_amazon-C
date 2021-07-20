import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/product");
      setDatas(data);
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={[datas, setDatas]}>
      {props.children}
    </DataContext.Provider>
  );
};
