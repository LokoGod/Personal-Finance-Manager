import React from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const apiRoute = "localhost:5000/api/v1/income";

interface Incomes {
  id: number;
  income_title: string;
  income_amount: number;
  // recurring Boolean
  received_date: Date;
  categoryId: number;
}

const getIncome = async () => {
  return await axios.get(apiRoute).then((res) => res.data.results);
};

const { isLoading, data } = useQuery<Incomes[]>({
  queryKey: ["income"],
  queryFn: getIncome,
});

const Overview = () => {
  return (
    <div>
      {/* {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          {(data ?? []).length > 0 &&
            (data ?? []).map((income) => <Income key={income.id} {...income} />)}
        </>
      )} */}
      <p>hello</p>
    </div>
  );
};

export default Overview;
