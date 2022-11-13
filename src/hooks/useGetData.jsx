import { useState, useEffect } from "react";
import axios from "axios";

import config from "../config.json";
import Swal from "sweetalert2";

const useGetData = (endpoint) => {
  let point = endpoint ?? ""
  const [target, setTarget] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(`${config.API}${point}`)
        .then((response) => {
          setTarget(response.data);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Ups...",
            icon: "error",
            text: "Something went wrong, please refresh this page",
            timer: 2000,
          });
        });
    };

    getData();
  }, []);

  return target;
};

export default useGetData;
