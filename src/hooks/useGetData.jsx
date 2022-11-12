import { useState, useEffect } from "react";
import axios from "axios";

import config from "../config.json"

const useGetData = (endpoint) => {
  const [target, setTarget] = useState([]);

  useEffect(async () => {
    const response = await axios(`${config.API}${endpoint}`);
    setTarget(response.data);
  }, []);

  return target;
};

export default useGetData;