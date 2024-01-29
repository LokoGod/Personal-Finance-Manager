import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getIncomeData = async () => {
  return await axios.get('localhost:5000/api/v1/income')
}

const Overview = () => {
  // const { data, error } = useQuery({
  //   queryKey: ["income"],
  //   queryFn: getIncomeData,
  // })
  
  return (
    <div>

    </div>
  );
};

export default Overview;
