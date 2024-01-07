import HomeCardData from "@/components/visualizations/HomeCardData";
import HomeList from "@/components/visualizations/HomeList";
import HomeTable from "@/components/visualizations/HomeTable";
import AreaSalesChart from "@/components/visualizations/charts/AreaSalesChart";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeCardData />
      
      <div className="flex">
        <div className="mr-5">
        <HomeTable />
        </div>
        <div className="">
        <HomeList />
        </div>
      </div>

      <AreaSalesChart />
    </div>
  );
};

export default Home;
