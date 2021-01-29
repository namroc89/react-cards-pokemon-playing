import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [dataList, setDataList] = useState([]);
  const addData = async () => {
    const resp = await axios.get(`${url}`);
    setDataList([...dataList, { ...resp.data, id: uuid() }]);
  };
  return [dataList, addData];
};

export default useAxios;
