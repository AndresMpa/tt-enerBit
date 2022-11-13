import { useState, useEffect } from "react";
import axios from "axios";

import config from "../config.json";
import Swal from "sweetalert2";

const useGetData = (endpoint) => {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    let point = endpoint ?? "";
    const getData = async () => {
      axios
        .get(`${config.API}${point}`)
        .then((response) => {
          setTarget(response.data);
        })
        .catch((error) => {
          Swal.fire({
            title: "Ups...",
            icon: "error",
            text: "Something went wrong, please refresh this page",
            timer: 2000,
          });
        });
    };

    getData();
  });

  return target;
};

export default useGetData;
